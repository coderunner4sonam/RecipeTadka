export const data = [
  {
    activities: ["Cooking"],

    date: { time: 1617603973 },

    mood: 5,

    negativeEmotions: ["Nervous"],

    positiveEmotions: ["Excited"],
  },

  {
    date: { time: 1617690410 },

    mood: 4,

    positiveEmotions: ["Optimistic"],
  },

  {
    date: { time: 1617776843 },

    mood: 5,

    positiveEmotions: ["Optimistic"],
  },

  {
    date: { time: 1617776887 },

    mood: 3,

    negativeEmotions: ["Sad"],
  },

  {
    date: { time: 1617776893 },

    mood: 1,

    negativeEmotions: ["Sad"],
  },

  {
    date: { time: 1617776923 },

    mood: 5,

    positiveEmotions: ["Happy"],
  },

  {
    date: { time: 1617798494 },

    mood: 3,

    positiveEmotions: ["Grateful"],
  },

  {
    date: { time: 1617884916 },

    mood: 5,

    positiveEmotions: ["Grateful"],
  },

  {
    date: { time: 1617884939 },

    mood: 4,

    negativeEmotions: ["Sad"],
  },

  {
    date: { time: 1617884939 },

    mood: 25,

    negativeEmotions: ["Sad"],
  },
];

// Output

[
  {
    mood: 2,

    moods: [
      {
        date: { time: 1647629418 },

        mood: 2,

        negativeEmotions: ["Sad"],
      },

      {
        date: { time: 1647599400 },

        mood: 2,

        positiveEmotions: ["Grateful"],
      },
    ],
  },

  {
    mood: 4,

    moods: [
      {
        date: { time: 1647837000 },

        mood: 4,
      },
    ],
  },
];
