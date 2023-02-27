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
  detail: {
    addictions: string
    recommendations: string[]
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
    detail: {
      addictions:
        'Excessive use of diets, vitamins, and cleansing techniques (fasts, diet pills, enemas). Under-eating for self-control: in extreme cases anorexia and bulimia. Alcohol to relieve tension.',
      recommendations: [
        'Learn to relax. Take some time for yourself, without feeling that everything is up to you or that what you do not accomplish will result in chaos and disaster. Mercifully, the salvation of the world does not depend on you alone, even though you may sometimes feel it does.',
        'You have a lot to teach others and are probably a good teacher, but do not expect others to change immediately. What is obvious to you may not be as obvious to them, especially if they are not used to being as self-disciplined and objective about themselves as you are about yourself. Many people may also want to do what is right and may agree with you in principle but for various reasons simply cannot change right away. The fact that others do not change immediately according to your prescriptions does not mean that they will not change sometime in the future. Your words and above all, your example may do more good than you realize, although they may take longer than you expect. So have patience.',
        'It is easy for you to work yourself up into a lather about the wrongdoings of others. And it may sometimes be true that they are wrong. But what is it to you? Your irritation with them will do nothing to help them see another way of being. Similarly, beware of your constant irritation with your own "shortcomings." Does your own harsh self-criticism really help you to improve? Or does it simply make you tense, nervous, and self-doubting? Learn to recognize the attacks of your superego and how they undermine rather than help you.',
        'It is important for you to get in touch with your feelings, particularly your unconscious impulses. You may find that you are uneasy with your emotions and your sexual and aggressive impulses—in short, with the messy human things that make us human. It might be beneficial to keep a journal or to get into some kind of group therapy or other group work both to develop your emotions and to see that others will not condemn you for having human needs and limitations.',
        "Your Achilles' heel is your self-righteous anger. You get angry easily and are offended by what seems to you to be the perverse refusal of others to do the right thing—as you have defined it. Try to step back and see that your anger alienates people so that they cannot hear many of the good things you have to say. Further, your own repressed anger may well be giving you an ulcer or high blood pressure and is a harbinger of worse things to come.",
      ],
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
    detail: {
      addictions:
        'Abusing food and over-the-counter medications. Bingeing, especially on sweets and carbohydrates. Over-eating from feeling “love-starved;” in extreme cases bulimia. Hypochondria to look for sympathy. ',
      recommendations: [
        "First and foremost, remember that if you are not addressing your own needs, it is highly unlikely that you will be able to meet anyone else's needs without problems, underlying resentments, and continual frustration. Further, you will be less able to respond to people in a balanced way if you have not gotten adequate rest, and taken care of yourself properly. It is not selfish to make sure that you are okay before attending to others' needs—it is simply common sense.",
        'Try to become more conscious of your own motives when you decide to help someone. While doing good things for people is certainly an admirable trait, when you do so because you expect the other person to appreciate you or do something nice for you in return, you are setting yourself up for disappointments. Your type has a real danger of falling into unconscious codependent patterns with loved ones, and they almost never bring you what you really want.',
        `While there are many things you might want to do for people, it is often better to ask them what they really need first. You are gifted at accurately intuiting others' feelings and needs, but that does not necessarily mean that they want those needs remedied by you in the way you have in mind. Communicate your intentions, and be willing to accept a "no thank you." Someone deciding that they do not want your particular offer of help does not mean that they dislike you or are rejecting you.`,
        'Resist the temptation to call attention to yourself and your good works. After you have done something for others, do not remind them about it. Let it be: either they will remember your kindness themselves and thank you in their own way or they will not. Your calling attention to what you have done for them only puts people on the spot and makes them feel uneasy. It will not satisfy anyone or improve your relationships.',
        'Learn to recognize the affection and good wishes of others, even when these are not in terms that you are familiar with. Although others may not express their feelings in a way that you want, they may be letting you know in other ways how much they care about you. If you can recognize what others are giving you, you will rest more easily in the knowledge that you really are loved. Love is always available but only to the degree that we are present and therefore receptive to it.',
      ],
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
    detail: {
      addictions:
        'Over-stressing the body for recognition. Working out to exhaustion. Starvation diets. Workaholism. Excessive intake of coffee, stimulants, amphetamines, cocaine, steroids or excessive surgery for cosmetic improvement.',
      recommendations: [
        'For our real development, it is essential to be truthful. Be honest with yourself and others about your genuine feelings and needs. Likewise, resist the temptation to impress others or inflate your importance. You will impress people more deeply by being authentic than by bragging about your successes or exaggerating your accomplishments.',
        'Develop charity and cooperation in your relationships. You can do this by taking time to pause in a busy day to really connect with someone you care about. Nothing spectacular is required—simply a few moments of quiet appreciation. When you do so, you will become a more loving person, a more faithful friend—and a much more desirable individual. You will feel better about yourself.',
        'Take breaks. You can drive yourself and others to exhaustion with your relentless pursuit of your goals. Ambition and self-development are good qualities, but temper them with rest periods in which you reconnect more deeply with yourself. Sometimes taking three to five deep breaths is enough to recharge your battery and improve your outlook.',
        'Develop your social awareness. Many Threes have grown tremendously by getting involved in projects that had nothing to do with their own personal advancement. Working cooperatively with others toward goals that transcend personal interest is a powerful way of finding your true value and identity.',
        'In their desire to be accepted by others, some average Threes adapt so much to the expectations of others that they lose touch with what they are really feeling about the situation. Develop yourself by resisting doing what is acceptable just to be accepted. It is imperative that you invest time in discovering your own core values.',
      ],
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
    detail: {
      addictions:
        'Over-indulgence in rich foods, sweets, alcohol to alter mood, to socialize, and for emotional consolation. Lack of physical activity. Bulimia. Depression. Tobacco, prescription drugs, or heroin for social anxiety. Cosmetic surgery to erase rejected features.',
      recommendations: [
        `Do not pay so much attention to your feelings; they are not a true source of support for you, as you probably already know. Remember this advice: "From our present perspective, we can also see that one of the most important mistakes Fours make is to equate themselves with their feelings. The fallacy is that to understand themselves they must understand their feelings, particularly their negative ones, before acting. Fours do not see that the self is not the same as its feelings or that the presence of negative feelings does not preclude the presence of good in themselves" (Personality Types, p. 172). Always remember that your feelings are telling you something about yourself as you are at this particular moment, not necessarily more than that.`,
        `Avoid putting off things until you are "in the right mood." Commit yourself to productive, meaningful work that will contribute to your good and that of others, no matter how small the contribution may be. Working consistently in the real world will create a context in which you can discover yourself and your talents. (Actually, you are happiest when you are working—that is, activating your potentials and realizing yourself. You will not "find yourself" in a vacuum or while waiting for inspiration to strike, so connect—and stay connected—with the real world.`,
        `Self-esteem and self-confidence will develop only from having positive experiences, whether or not you believe that you are ready to have them. Therefore, put yourself in the way of good. You may never feel that you are ready to take on a challenge of some sort, that you always need more time. (Fours typically never feel that they are sufficiently "together," but they must nevertheless have the courage to stop putting off their lives.) Even if you start small, commit yourself to doing something that will bring out the best in you.`,
        `A wholesome self-discipline takes many forms, from sleeping regular hours to working regularly to exercising regularly, and has a cumulative, strengthening effect. Since it comes from yourself, a healthy self-discipline is not contrary to your freedom or individuality. On the other hand, sensuality, excessive sexual experiences, alcohol, drugs, sleep, or fantasizing have a debilitating effect on you, as you already know. Therefore, practice healthy self-discipline and stay with it.`,
        `Avoid lengthy conversations in your imagination, particularly if they are negative, resentful, or even excessively romantic. These conversations are essentially unreal and at best only rehearsals for action—although, as you know, you almost never say or do what you imagine you will. Instead of spending time imagining your life and relationships, begin to live them.`,
      ],
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
    detail: {
      addictions:
        'Poor eating and sleeping habits due to minimizing needs. Neglecting hygiene and nutrition. Lack of physical activity. Psychotropic drugs for mental stimulation and escape, narcotics for anxiety.',
      recommendations: [
        `Learn to notice when your thinking and speculating takes you out of the immediacy of your experience. Your mental capacities can be an extraordinary gift, but only can also be a trap when you use them to retreat from contact with yourself and others. Stay connected with your physicality.`,
        `You tend to be extremely intense and so high-strung that you find it difficult to relax and unwind. Make an effort to learn to calm down in a healthy way, without drugs or alcohol. Exercising or using biofeedback techniques will help channel some of your tremendous nervous energy. Meditation, jogging, yoga, and dancing are especially helpful for your type.`,
        `You see many possibilities but often do not know how to choose among them or judge which is more or less important. When you are caught in your fixation, a sense of perspective can be missing, and with it the ability to make accurate assessments. At such time, it can be helpful to get the advice of someone whose judgment you trust while you are gaining perspective on your situation. Doing this can also help you trust someone else, a difficulty for your type.`,
        `Notice when you are getting intensely involved in projects that do not necessarily support your self-esteem, confidence, or life situation. It is possible to follow many different fascinating subjects, games, and pastimes, but they can become huge distractions from what you know you really need to do. Decisive action will bring more confidence than learning more facts or acquiring more unrelated skills.`,
        `Fives tend to find it difficult to trust people, to open up to them emotionally, or to make themselves accessible in various ways. Their awareness of potential problems in relationships may tend to create a self-fulfilling prophecy. It is important to remember that having conflicts with others is not unusual and that the healthy thing is to work them out rather than reject attachments with people by withdrawing into isolation. Having one or two intimate friends whom you trust enough to have conflicts with will enrich your life greatly.`,
      ],
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
    detail: {
      addictions: `Rigidity in diet causes nutritional imbalances ("I don't like vegetables"). Working excessively. Caffeine and amphetamines for stamina, but also alcohol and depressants to deaden anxiety. Higher susceptibility to alcoholism than many types.`,
      recommendations: [
        `Remember that there is nothing unusual about being anxious since everyone is anxious and much more often than you might think. Learn to be more present to your anxiety, to explore it, and to come to terms with it. Work creatively with your tensions without turning to excessive amounts of alcohol (or other drugs) to allay them. In fact, if you are present and breathing fully, anxiety can be energizing, a kind of tonic that can help make you more productive and aware of what you are doing.`,
        `You tend to get edgy and testy when you are upset or angry, and can even turn on others and blame them for things you have done or brought on yourself. Be aware of your pessimism: it causes you dark moods and negative thought patterns that you tend to project on reality. When you succumb to this self-doubt, you can become your own worst enemy and may harm yourself more than anyone else does.`,
        `Sixes tend to overreact when they are under stress and feeling anxious. Learn to identify what makes you overreact. Also realize that almost none of the things you have feared so much has actually come true. Even if things are as bad as you think, your fearful thoughts weaken you and your ability to change things for the better. You cannot always manage external events, but you can manage your own thoughts.`,
        `Work on becoming more trusting. There are doubtless several people in your life you can turn to who care about you and who are trustworthy. If not, go out of your way to find someone trustworthy, and allow yourself to get close to that person. This will mean risking rejection and stirring up some of your deepest fears, but the risk is worth taking. You have a gift for getting people to like you, but you are unsure of yourself and may be afraid of making a commitment to them. Therefore, come down clearly on one side or the other of the fence in your relationships. Let people know how you feel about them.`,
        `Others probably think better of you than you realize, and few people are really out to get you. In fact, your fears tell you more about your attitudes toward others than they indicate about others' attitudes toward you.`,
      ],
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
    detail: {
      addictions: `The type most prone to addictions: stimulants (caffeine, cocaine, and amphetamines), Ecstasy, psychotropics, narcotics, and alcohol but tend to avoid other depressants. Wear body out with effort to stay "up." Excessive cosmetic surgery, pain killers. `,
      recommendations: [
        `Recognize your impulsiveness, and get in the habit of observing your impulses rather than giving in to them. This means letting most of your impulses pass and becoming a better judge of which ones are worth acting on. The more you can resist acting out your impulses, the more you will be able to focus on what is really good for you.`,
        `Learn to listen to other people. They are often interesting, and you may learn things that will open new doors for you. Also learn to appreciate silence and solitude: you do not have to distract yourself (and protect yourself from anxiety) with constant noise from the television or the stereo. By learning to live with less external stimulation, you will learn to trust yourself. You will be happier than you expect because you will be satisfied with whatever you do, even if it is less than you have been doing.`,
        `You do not have to have everything this very moment. That tempting new acquisition will most likely still be available tomorrow (this is certainly true of food, alcohol, and other common gratifications—that ice cream cone, for instance). Most good opportunities will come back again—and you will be in a better position to discern which opportunities really are best for you.`,
        `Always choose quality over quantity, especially in your experiences. The ability to have experiences of quality can be learned only by giving your full attention to the experience you are having now. If you keep anticipating future experiences, you will keep missing the present one and undermine the possibility of ever being satisfied.`,
        `Make sure that what you want will really be good for you in the long run. As the saying goes, watch what you pray for since your prayers may be answered. In the same vein, think about the long-term consequences of what you want since you may get it only to find that it becomes another disappointment—or even a source of unhappiness.`,
      ],
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
    detail: {
      addictions: `Ignore physical needs and problems: avoid medical visits and check-ups. Indulging in rich foods, alcohol, tobacco while pushing self too hard leads to high stress, strokes, and heart conditions. Control issues central, although alcoholism and narcotic addictions are possible.`,
      recommendations: [
        `It goes against the grain, but act with self-restraint. You show true power when you forbear from asserting your will with others, even when you could. Your real power lies in your ability to inspire and uplift people. You are at your best when you take charge and help everyone through a crisis. Few will take advantage of you when you are caring, and you will do more to secure the loyalty and devotion of others by showing the greatness of your heart than you ever could by displays of raw power.`,
        `It is difficult for Eights, but learn to yield to others, at least occasionally. Often, little is really at stake, and you can allow others to have their way without fear of sacrificing your power, or your real needs. The desire to dominate everyone all the time is a sign that your ego is beginning to inflate—a danger signal that more serious conflicts with others are inevitable.`,
        `Remember that the world is not against you. Many people in your life care about you and look up to you, but when you are in your fixation, you do not make this easy for them. Let in the affection that is available. Doing this will not make you weak, but will confirm the strength and support in yourself and your life. Also remember that by believing that others are against you and reacting against them, you tend to alienate them and confirm your own fears. Take stock of the people who truly are on your side, and let them know how important they are to you.`,
        `Eights typically want to be self-reliant and depend on no one. But, ironically, they depend on many people. For example, you may think that you are not dependent on your employees because they depend on you for their jobs. You could dismiss them at any time and hire other workers. Everyone is expendable in your little kingdom—except you. But the fact is that you are dependent on others to do their jobs too, especially if your business concerns grow beyond what you can manage alone. But if you alienate everyone associated with you, you will eventually be forced to employ the most obsequious and untrustworthy operatives. When you do, you will have reason to question their loyalty and to fear losing your position. The fact is that whether in your business world or your domestic life, your self-sufficiency is largely an illusion.`,
        `Eights typically overvalue power. Having power, whether through wealth, position, or simple brute force, allows them to do whatever they want, to feel important, to be feared and obeyed. But those who are attracted to you because of your power do not love you for yourself, nor do you love or respect them. While this may be the Faustian bargain you have made, you will nevertheless have to pay the price that whatever power you accumulated will inevitably be at a cost to you, physically and emotionally.`,
      ],
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
    detail: {
      addictions: `Over-eating or under-eating due to lack of self-awareness and repressed anger. Lack of physical activity. Depressants and psychotropics, alcohol, marijuana, narcotics to deaden loneliness and anxiety.`,
      recommendations: [
        `It is worth examining your type's tendency to go along with others, doing what they want to keep the peace and be nice. Will constantly acquiescing to the wishes of others provide the kind of relationships that will really satisfy you? Remember, it is impossible to love others if you are not truly present to them. This means that you have to be yourself, that you (paradoxically) have to be independent so that you can really be there for others when they need you.`,
        `Exert yourself. Force yourself to pay attention to what is going on. Do not drift off or tune out people, or daydream. Work on focusing your attention to become an active participant in the world around you. Try to become more mentally and emotionally engaged.`,
        `Recognize that you also have aggressions, anxieties, and other feelings that you must deal with. Negative feelings and impulses are a part of you and they affect you emotionally and physically whether or not you acknowledge them. Furthermore, your negative emotions are often expressed inadvertently and get in the way of the peace and harmony you want in your relationships. It is best to get things out in the open first, at least by allowing yourself to become aware of your feelings.`,
        `Although this will be very painful for you, if your marriage has ended in divorce or if you are having problems with your children, you must honestly examine how you have contributed to these problems. Examining troubled relationships will be extremely difficult because the people involved have been close to your heart. The feelings you have for others endow you with much of your identity and self-esteem. But if you really love others, you can do no less than examine the role you have played in whatever conflicts that have arisen. In the last analysis, the choice is simple: you must sacrifice your peace of mind (in the short run) for the satisfaction of genuine relationships (in the long run.)`,
        `Exercise frequently to become more aware of your body and emotions. (Some Nines run around doing errands and think that they are getting enough exercise.) Regular exercise is a healthy form of self-discipline and will increase your awareness of your feelings and other sensations. Developing body-awareness will help teach you to concentrate and focus your attention in other areas of your life as well. Exercise is also a good way to get in touch with and express some aggressions.`,
      ],
    },
  },
]
