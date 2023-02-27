interface TypeSummary {
  subtitle1: string
  subtitle2: string
  description: string
  problems: string
  best: string
  fear: string
  desire: string
  motivation: string
}

interface TypeRelation {
  description: string
  num: number
}

interface Type {
  num: number
  name: string
  summary: TypeSummary
  relations: {
    wingL: TypeRelation
    wingR: TypeRelation
    stress: TypeRelation
    growth: TypeRelation
  }
}

export const types: Type[] = [
  {
    num: 1,
    name: 'Reformer',
    summary: {
      subtitle1: 'Rational, Idealistic',
      subtitle2: 'Principled, Purposeful, Self-Controlled, and Perfectionistic',
      description:
        'Ones are conscientious and ethical, with a strong sense of right and wrong. They are teachers, crusaders, and advocates for change: always striving to improve things, but afraid of making a mistake. Well-organized, orderly, and fastidious, they try to maintain high standards, but can slip into being critical and perfectionistic.',
      problems: 'Resentment and impatience.',
      best: 'Wise, discerning, realistic, and noble. Can be morally heroic.',
      fear: 'Being corrupt/evil, defective',
      desire: 'To be good, to have integrity, to be balanced',
      motivation:
        'Want to be right, to strive higher and improve everything, to be consistent with their ideals, to justify themselves, to be beyond criticism so as not to be condemned by anyone.',
    },
    relations: {
      wingL: {
        description: 'Idealist',
        num: 9,
      },
      wingR: {
        description: 'Advocate',
        num: 2,
      },
      stress: {
        description:
          'methodical Ones become moody and irrational, like unhealthy Fours',
        num: 4,
      },
      growth: {
        description:
          'angry, critical Ones become more spontaneous and joyful, like healthy Sevens',
        num: 7,
      },
    },
  },
  {
    num: 2,
    name: 'Helper',
    summary: {
      subtitle1: 'Caring, Interpersonal',
      subtitle2: 'Generous, Demonstrative, People-Pleasing, and Possessive',
      description:
        'Twos are empathetic, sincere, and warm-hearted. They are friendly, generous, and self-sacrificing, but can also be sentimental, flattering, and people-pleasing. They are well-meaning and driven to be close to others, but can slip into doing things for others in order to be needed.',
      problems: 'Possessiveness and with acknowledging their own needs.',
      best: 'Unselfish and altruistic, they have unconditional love for others.',
      fear: 'Being unwanted, unworthy of being loved',
      desire: 'To feel loved',
      motivation:
        'Want to be loved, to express their feelings for others, to be needed and appreciated, to get others to respond to them, to vindicate their claims about themselves.',
    },
    relations: {
      wingL: {
        description: 'Servant',
        num: 1,
      },
      wingR: {
        description: 'Host/ess',
        num: 3,
      },
      stress: {
        description:
          'needy Twos become aggressive and dominating, like unhealthy Eights',
        num: 8,
      },
      growth: {
        description:
          'prideful, self-deceptive Twos become more self-nurturing and emotionally aware, like healthy Fours',
        num: 4,
      },
    },
  },
  {
    num: 3,
    name: 'Achiever',
    summary: {
      subtitle1: 'Success-Oriented, Pragmatic',
      subtitle2: 'Adaptable, Excelling, Driven, and Image-Conscious',
      description:
        'Threes are self-assured, attractive, and charming. Ambitious, competent, and energetic, they can also be status-conscious and highly driven for advancement. They are diplomatic and poised, but can also be overly concerned with their image and what others think of them.',
      problems: 'Workaholism and competitiveness.',
      best: 'Self-accepting, authentic, everything they seem to be—role models who inspire others.',
      fear: 'Being worthless',
      desire: 'To feel valuable and worthwhile',
      motivation:
        'Want to be affirmed, to distinguish themselves from others, to have attention, to be admired, and to impress others.',
    },
    relations: {
      wingL: {
        description: 'Charmer',
        num: 2,
      },
      wingR: {
        description: 'Professional',
        num: 4,
      },
      stress: {
        description:
          'driven Threes become disengaged and apathetic, like unhealthy Nines',
        num: 9,
      },
      growth: {
        description:
          'vain, deceitful Threes become more cooperative and committed to others, like healthy Sixes',
        num: 6,
      },
    },
  },
  {
    num: 4,
    name: 'Individualist',
    summary: {
      subtitle1: 'Sensitive, Introspective',
      subtitle2: 'Expressive, Dramatic, Self-Absorbed, and Temperamental',
      description:
        'Fours are self-aware, sensitive, and reserved. They are emotionally honest, creative, and personal, but can also be moody and self-conscious. Withholding themselves from others due to feeling vulnerable and defective, they can also feel disdainful and exempt from ordinary ways of living.',
      problems: 'Melancholy, self-indulgence, and self-pity.',
      best: 'Inspired and highly creative, they are able to renew themselves and transform their experiences.',
      fear: 'That they have no identity or personal significance',
      desire:
        'To find themselves and their significance (to create an identity)',
      motivation:
        'Want to express themselves and their individuality, to create and surround themselves with beauty, to maintain certain moods and feelings, to withdraw to protect their self-image, to take care of emotional needs before attending to anything else, to attract a "rescuer."',
    },
    relations: {
      wingL: {
        description: 'Aristocrat',
        num: 3,
      },
      wingR: {
        description: 'Bohemian',
        num: 5,
      },
      stress: {
        description:
          'aloof Fours become over-involved and clinging, like unhealthy Twos',
        num: 2,
      },
      growth: {
        description:
          'envious, emotionally turbulent Fours become more objective and principled, like healthy Ones',
        num: 1,
      },
    },
  },
  {
    num: 5,
    name: 'Investigator',
    summary: {
      subtitle1: 'Intense, Cerebral',
      subtitle2: 'Perceptive, Innovative, Secretive, and Isolated',
      description:
        'Fives are alert, insightful, and curious. They are able to concentrate and focus on developing complex ideas and skills. Independent, innovative, and inventive, they can also become preoccupied with their thoughts and imaginary constructs. They become detached, yet high-strung and intense.',
      problems: 'Eccentricity, nihilism, and isolation.',
      best: 'Visionary pioneers, often ahead of their time, and able to see the world in an entirely new way.',
      fear: 'Being useless, helpless, or incapable',
      desire: 'To be capable and competent',
      motivation:
        'Want to possess knowledge, to understand the environment, to have everything figured out as a way of defending the self from threats from the environment.',
    },
    relations: {
      wingL: {
        description: 'Iconoclast',
        num: 4,
      },
      wingR: {
        description: 'Problem Solver',
        num: 6,
      },
      stress: {
        description:
          'detached Fives become hyperactive and scattered, like unhealthy Sevens',
        num: 7,
      },
      growth: {
        description:
          'avaricious, detached Fives become more self-confident and decisive, like healthy Eights',
        num: 8,
      },
    },
  },
  {
    num: 6,
    name: 'Loyalist',
    summary: {
      subtitle1: 'Committed, Security-Oriented',
      subtitle2: 'Engaging, Responsible, Anxious, and Suspicious',
      description:
        'Sixes are reliable, hard-working, responsible, and trustworthy. Excellent "troubleshooters," they foresee problems and foster cooperation, but can also become defensive, evasive, and anxious—running on stress while complaining about it. They can be cautious and indecisive, but also reactive, defiant and rebellious.',
      problems: 'Self-doubt and suspicion.',
      best: 'Internally stable and self-reliant, courageously championing themselves and others.',
      fear: 'Being without support and guidance',
      desire: 'To have security and support',
      motivation:
        'Want to have security, to feel supported by others, to have certitude and reassurance, to test the attitudes of others toward them, to fight against anxiety and insecurity.',
    },
    relations: {
      wingL: {
        description: 'Defender',
        num: 5,
      },
      wingR: {
        description: 'Buddy',
        num: 7,
      },
      stress: {
        description:
          'dutiful Sixes become competitive and arrogant, like unhealthy Threes',
        num: 3,
      },
      growth: {
        description:
          'fearful, pessimistic Sixes become more relaxed and optimistic, like healthy Nines',
        num: 9,
      },
    },
  },
  {
    num: 7,
    name: 'Enthusiast',
    summary: {
      subtitle1: 'Busy, Variety-Seeking',
      subtitle2: 'Spontaneous, Versatile, Acquisitive, and Scattered',
      description:
        'Sevens are extroverted, optimistic, versatile, and spontaneous. Playful, high-spirited, and practical, they can also misapply their many talents, becoming over-extended, scattered, and undisciplined. They constantly seek new and exciting experiences, but can become distracted and exhausted by staying on the go.',
      problems: 'Impatience and impulsiveness.',
      best: 'They focus their talents on worthwhile goals, becoming appreciative, joyous, and satisfied.',
      fear: 'Being deprived and in pain',
      desire: 'To be satisfied and content—to have their needs fulfilled',
      motivation:
        'Want to maintain their freedom and happiness, to avoid missing out on worthwhile experiences, to keep themselves excited and occupied, to avoid and discharge pain.',
    },
    relations: {
      wingL: {
        description: 'Entertainer',
        num: 6,
      },
      wingR: {
        description: 'Realist',
        num: 8,
      },
      stress: {
        description:
          'scattered Sevens become perfectionistic and critical, like unhealthy Ones',
        num: 1,
      },
      growth: {
        description:
          'gluttonous, scattered Sevens become more focused and fascinated by life, like healthy Fives',
        num: 5,
      },
    },
  },
  {
    num: 8,
    name: 'Challenger',
    summary: {
      subtitle1: 'Powerful, Dominating',
      subtitle2: 'Self-Confident, Decisive, Willful, and Confrontational',
      description:
        'Eights are self-confident, strong, and assertive. Protective, resourceful, straight-talking, and decisive, but can also be ego-centric and domineering. Eights feel they must control their environment, especially people, sometimes becoming confrontational and intimidating.',
      problems: 'Tempers and with allowing themselves to be vulnerable.',
      best: "Self- mastering, they use their strength to improve others' lives, becoming heroic, magnanimous, and inspiring.",
      fear: 'Being harmed or controlled by others',
      desire:
        'To protect themselves (to be in control of their own life and destiny)',
      motivation:
        'Want to be self-reliant, to prove their strength and resist weakness, to be important in their world, to dominate the environment, and to stay in control of their situation.',
    },
    relations: {
      wingL: {
        description: 'Maverick',
        num: 7,
      },
      wingR: {
        description: 'Bear',
        num: 9,
      },
      stress: {
        description:
          'self-confident Eights become secretive and fearful, like unhealthy Fives',
        num: 5,
      },
      growth: {
        description:
          'lustful, controlling Eights become more open-hearted and caring, like healthy Twos',
        num: 2,
      },
    },
  },
  {
    num: 9,
    name: 'Peacemaker',
    summary: {
      subtitle1: 'Easygoing, Self-Effacing',
      subtitle2: 'Receptive, Reassuring Agreeable, and Complacent',
      description:
        'Nines are accepting, trusting, and stable. They are usually creative, optimistic, and supportive, but can also be too willing to go along with others to keep the peace. They want everything to go smoothly and be without conflict, but they can also tend to be complacent, simplifying problems and minimizing anything upsetting.',
      problems: 'Inertia and stubbornness.',
      best: 'Indomitable and all-embracing, they are able to bring people together and heal conflicts.',
      fear: 'Loss and separation',
      desire: 'To have inner stability "peace of mind"',
      motivation:
        'Want to create harmony in their environment, to avoid conflicts and tension, to preserve things as they are, to resist whatever would upset or disturb them.',
    },
    relations: {
      wingL: {
        description: 'Referee',
        num: 8,
      },
      wingR: {
        description: 'Dreamer',
        num: 1,
      },
      stress: {
        description:
          'complacent Nines become anxious and worried, like unhealthy Sixes',
        num: 6,
      },
      growth: {
        description:
          'slothful, self-neglecting Nines become more self-developing and energetic, like healthy Threes',
        num: 3,
      },
    },
  },
]
