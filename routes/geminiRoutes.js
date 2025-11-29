import express from 'express'
const router = express.Router()

router.post('/', async (req, res) => {
  try {
    console.log('Gemini proxy: received request');
    console.log('Body:', JSON.stringify(req.body));
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return res.status(500).json({ error: 'Server Gemini API key not configured (GEMINI_API_KEY).' })
    }

    const { question, context } = req.body || {}
    if (!question || !context) {
      return res.status(400).json({ error: 'Missing question or context in request body.' })
    }

    const historianPrompt = `You are an expert historian specializing in ancient monuments, inscriptions, and cultural heritage.\n\nBased on the following monument information:\n- Original Text: ${context.originalText}\n- Translation: ${context.translatedText}\n- Context: ${context.context}\n\nAnswer the user's query as a historian would, providing accurate historical context, architectural insights, cultural significance, and detailed explanations. Be conversational, informative, and cite relevant historical periods and events when applicable.\n\nUser Question: ${question}`

    const modelName = process.env.GEMINI_MODEL || 'gemini-2.5-flash'
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`
    console.log('Gemini proxy: calling model', modelName, 'url:', url)

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: historianPrompt }
            ]
          }
        ]
      })
    })

    console.log('Gemini proxy: upstream response status', response.status)
    if (!response.ok) {
      const text = await response.text()
      console.error('Gemini proxy: upstream error body', text)
      // If model not found or other config issue, try to list available models
      let modelsList = null
      try {
        const listResp = await fetch(
          `https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`
        )
        if (listResp.ok) {
          modelsList = await listResp.json()
        }
      } catch (listErr) {
        console.error('Gemini proxy: failed to list models', listErr)
      }

      return res.status(response.status).json({
        error: 'Gemini API error',
        details: text,
        models: modelsList,
        note: 'If you see a NOT_FOUND for the model, set GEMINI_MODEL to a supported model name or update the request method to match the model.',
      })
    }

    const data = await response.json()
    const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || null

    console.log('Gemini proxy: aiText length', aiText ? aiText.length : 0)
    if (!aiText) {
      return res.status(500).json({ error: 'Empty response from Gemini' })
    }

    res.json({ text: aiText })
  } catch (err) {
    console.error('Gemini proxy error:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
