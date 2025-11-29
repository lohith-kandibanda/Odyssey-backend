import mongoose from "mongoose";
import Story from "./models/Story.js";

// Prefer the same env var used by the server (`MONGODB_URI`).
// Fall back to `MONGO_URI` for backward compatibility, then to local.
const MONGO_URI = process.env.MONGODB_URI || process.env.MONGO_URI || "mongodb://127.0.0.1:27017/brahmi";

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    const stories = [
      // ===============================
      // STORY 1 — Ashoka Pillar
      // ===============================
      {
        slug: "ashoka1",
        title: "Ashoka’s Pillar – Voice of Compassion",
        location: "Mauryan Empire, 3rd century BCE",
        imageUrl: "/media/ashoka1.jpg",
        englishTranslation: `Beloved of the Gods, King Ashoka, having conquered through war, now wishes to conquer through Dharma.
He declares that all beings—men and animals—should be treated with kindness.
Respect for parents and teachers, generosity to Brahmans and ascetics, honesty in speech, and compassion toward all living creatures are praised above all.
The king orders his officers to protect the weak, act justly, and listen to the people.
May this pillar stand as a reminder that true victory is the victory of the heart, not the sword.`,
        narrationText: `You are looking at the words of a king who changed his idea of power.
Two thousand three hundred years ago, Emperor Ashoka ruled a vast empire stretching across much of the Indian subcontinent.
After a brutal war in Kalinga, he walked among the dead and wounded and felt deep remorse.
That moment, Ashoka says, broke his heart.

On this pillar he does not boast of victories or gold.
Instead, he speaks of a very different kind of conquest – a conquest by Dharma, by righteousness.
He asks his people to care for parents and elders, to respect teachers, to be honest in speech, and to be gentle with servants and animals.
He commands his officers to listen to ordinary people and to protect the weak.

Ashoka also declares that all paths of worship deserve respect.
Whether one follows the Vedas, the Buddha, or other teachers, the king insists that harmony is better than quarrel.
For him, true greatness is not in destroying enemies, but in reducing suffering.

As you read these faint lines carved into stone, imagine the travelers who once stood here centuries ago.
Many of them could not meet the emperor in person, but through this pillar his voice reached them.
It reminded them that an empire is strongest not when people fear their ruler, but when they trust his compassion.

Today this inscription survives as a message from the ancient world:
power can be used not only to conquer lands, but also to nurture kindness.
This pillar is Ashoka’s promise that the memory of compassion can last longer than the memory of war.`,
        audioUrl: "/media/ashoka1.mp3",
        videoUrl: "/media/ashoka1.mp4"
      },

      // ========================================
      // STORY 2 — Kannada Temple Grant
      // ========================================
      {
        slug: "ashoka2",
        title: "The Village Gift to the Hill Temple",
        location: "Southern India, early medieval period",
        imageUrl: "/media/ashoka2.jpg",
        englishTranslation: `This inscription records a royal grant made to a small temple near the hills.
The king and his feudatory chiefs donate the revenues of a nearby village so that lamps may be kept burning in the shrine,
food may be offered to the deity, and visiting pilgrims may be fed.
The boundaries of the fields are carefully described,
and witnesses—merchants, farmers, and officers—are named.
The stone declares that anyone who protects this gift earns merit for many lifetimes,
and anyone who violates it will be blamed by both gods and men.`,
        narrationText: `This inscription may look like a dense wall of curling letters,
but it is really a record of village life from nearly a thousand years ago.
It is written in an early form of Kannada and carved on stone
so that its words would outlive the people who spoke them.

The inscription tells us that a king, along with his local chiefs,
made a generous gift to a hilltop temple.
Instead of donating coins that could be spent and forgotten,
they granted the income from an entire village.
The harvest from its fields, the taxes from its markets,
and the fees from its oil presses were all set aside for the service of the deity.

Line by line, the stone describes the boundaries of the land –
from the tamarind tree near the stream, to the old well,
to the rocky outcrop on the hillside.
It names the farmers and merchants who stood as witnesses,
reminding us that these were real people whose work sustained the temple.
With their labour, lamps would burn every evening,
drums would sound at festivals, and pilgrims arriving tired and dusty
would receive a simple meal.

The inscription also carries a warning.
It says that anyone who protects this gift earns great religious merit,
while anyone who tries to seize the land or change the terms of the grant
will be condemned by both gods and men.
In this way the stone becomes not just a record,
but a kind of guardian for the village.

As you look at these letters, imagine the moment they were carved:
the chisel striking the rock, the scribe reading out each phrase,
the villagers watching and listening.
For them this was more than legal paperwork –
it was a promise that their land, their temple, and their community were tied together.
Today, this inscription still speaks for them,
carrying the voices of a small village across the centuries.`,
        audioUrl: "/media/ashoka2.mp3",
        videoUrl: "/media/ashoka2.mp4"
      },

      // ========================================
      // STORY 3 — Manuscript of Sacred Knowledge
      // ========================================
      {
        slug: "ashoka3",
        title: "The Royal Proclamation of the Eternal Word",
        location: "Ancient manuscript tradition",
        imageUrl: "/media/ashoka3.jpg",
        englishTranslation: `This inscription speaks of the power of sacred words.
It declares that wisdom flows from the enlightened ones,
whose teachings guide people away from ignorance and suffering.
Rulers are reminded to govern with fairness,
protect the weak, and support those who follow the path of truth.
The message blesses those who preserve knowledge
and urges every generation to pass it forward.`,
        narrationText: `This ancient manuscript glows with the deep colours of tradition.
Its characters may seem unfamiliar,
yet the idea they carry is timeless:
knowledge is a treasure meant to be protected and shared.

This proclamation tells us that the wisest among humanity
are those who shine a lamp for others.
It praises teachers, monks, and scholars
who dedicate their lives to guiding people away from darkness and confusion.

The message also speaks to kings and ministers,
reminding them that true power lies not in armies or walls,
but in justice.
A ruler who protects the weak and listens to the wise
earns respect in this world — and peace in the next.

As the letters dance across the scroll,
they bless those who preserve libraries, scriptures,
and the spoken word.
Every generation, it says,
must pass knowledge forward like a flame
handed from one keeper to the next.

Today, this manuscript continues its journey through time —
from the hands of scribes to the eyes of scholars — and now to you.
Its message whispers across the centuries:
may wisdom never fade,
and may your path be guided by truth.`,
        audioUrl: "/media/ashoka3.mp3",
        videoUrl: "/media/ashoka3.mp4"
      },

      // ==================================================
      // STORY 4 — Generic (Trigger for ANY New Image)
      // ==================================================
      {
        slug: "ashoka-generic",
        title: "Footsteps of the Ancients",
        location: "Unknown origin — Ancient India",
        imageUrl: "",
        englishTranslation: `This inscription honors the sacred memory of revered ancestors
and the noble kings who once walked these lands.
It calls upon people to uphold righteousness,
protect temples, and preserve the wisdom of the elders.
The stone reminds us that even great rulers become immortal
not through conquest, but through their service to virtue and truth.`,
        narrationText: `Long before our time,
people carved their stories into stone so the earth itself would remember them.
This inscription is one such echo from the ancient past.
Though we may not know each letter,
we feel its message: that the deeds of the righteous never fade.

These chiseled lines praise the guardians of temples
and the protectors of people.
They honour the kings and sages who believed
that wisdom and kindness are stronger than any army.

Imagine the footsteps that once stood where this inscription was carved —
priests, travellers, warriors, children —
glancing at the script with reverence.
Stone was their paper, time was their witness.

Even as the words grow faint, the memory remains:
live with virtue, respect your heritage,
and protect what is sacred.
This monument is more than writing —
it is a promise carried from the past
to those willing to listen today.`,
        audioUrl: "/media/ashoka-generic.mp3",
        videoUrl: "/media/ashoka-generic.mp4"
      }
    ];

    await Story.deleteMany({});
    await Story.insertMany(stories);

    console.log("✔ Successfully seeded all 4 stories.");
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
  } catch (error) {
    console.error("Seed Error:", error);
    process.exit(1);
  }
}

seed();
