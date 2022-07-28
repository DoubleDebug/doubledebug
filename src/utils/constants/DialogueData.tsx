import css from '../../../src/styles/HomepageDialogue.module.css';

export const dialogueData: DialogueItem[] = [
  {
    stage: 1,
    elements: [
      {
        text: "I'm Double Debug,",
        props: {
          fontSize: '6xl',
          textAlign: 'left',
          pt: 6,
          color: 'black',
          transform: {
            base: 'scale(0.75) translateX(-100px) translateY(-50px)',
            xl: 'scale(0.8) translateX(-35px) translateY(-30px)',
            '2xl': 'none',
          },
          as: 'h1',
        },
        duration: 1000,
        delay: 1500,
      },
      {
        text: 'a full stack web developer.',
        props: {
          fontSize: '4xl',
          textAlign: 'left',
          color: 'blue.300',
          pl: 20,
          transform: {
            base: 'scale(0.8) translateX(-120px) translateY(-65px)',
            xl: 'scale(0.8) translateX(-35px) translateY(-40px)',
            '2xl': 'none',
          },
          as: 'h2',
        },
        duration: 1000,
        delay: 2000,
      },
    ],
    replies: [
      {
        text: 'Nice to meet you, Double Debug!',
        nextStage: 2,
        isPrimary: true,
      },
      {
        text: "I'm not interested...",
        nextStage: 7,
        isPrimary: false,
      },
    ],
    repliesDelay: 3500,
  },
  {
    stage: 2,
    elements: [
      {
        text: 'Feel free',
        props: {
          fontSize: '7xl',
          textAlign: 'left',
          color: 'black',
          pl: 4,
          transform: {
            base: 'scale(0.8) translateX(-20px) translateY(-50px)',
            xl: 'scale(0.9) translateX(13px) translateY(-30px)',
            '2xl': 'none',
          },
          as: 'h1',
        },
        duration: 1000,
        delay: 1500,
      },
      {
        text: 'to browse through my past projects',
        props: {
          fontSize: '3xl',
          textAlign: 'left',
          color: 'black',
          pl: 4,
          transform: {
            base: 'scale(0.8) translateX(-110px) translateY(-60px)',
            xl: 'scale(0.8) translateX(-20px) translateY(-40px)',
            '2xl': 'none',
          },
          as: 'h2',
        },
        duration: 1000,
        delay: 2000,
      },
    ],
    replies: [
      {
        text: 'Sure.',
        nextStage: 3,
        isPrimary: true,
      },
    ],
    repliesDelay: 3000,
  },
  {
    stage: 3,
    elements: [
      {
        text: 'and read',
        props: {
          fontSize: '7xl',
          textAlign: 'center',
          color: 'black',
          pr: 64,
          transform: {
            base: 'scale(0.8) translateX(-40px) translateY(-50px)',
            xl: 'scale(0.9) translateX(-30px) translateY(-30px)',
            '2xl': 'none',
          },
          as: 'h1',
        },
        duration: 1000,
        delay: 1000,
      },
      {
        text: 'about my work and education.',
        props: {
          fontSize: '4xl',
          textAlign: 'right',
          color: 'black',
          pr: 60,
          whiteSpace: 'nowrap',
          transform: {
            base: 'scale(0.75) translateX(-120px) translateY(-70px)',
            xl: 'scale(0.9) translateX(-40px) translateY(-35px)',
            '2xl': 'none',
          },
          as: 'h2',
        },
        duration: 1000,
        delay: 1500,
      },
    ],
    replies: [
      {
        text: 'Will do.',
        nextStage: 4,
        isPrimary: true,
      },
      {
        text: "I won't promise anything.",
        nextStage: 4,
        isPrimary: false,
      },
    ],
    repliesDelay: 3000,
  },
  {
    stage: 4,
    elements: [
      {
        text: (
          <>
            <span>In case you need a </span>
            <span className={css.underline}>beautiful,</span>
          </>
        ),
        props: {
          fontSize: '4xl',
          textAlign: 'center',
          color: 'black',
          pr: 40,
          pt: 4,
          whiteSpace: 'nowrap',
          transform: {
            base: 'scale(0.8) translateX(-80px) translateY(-40px)',
            xl: 'scale(0.9) translateX(-40px) translateY(-20px)',
            '2xl': 'translateX(-40px)',
          },
          as: 'h1',
        },
        duration: 1000,
        delay: 1000,
      },
      {
        text: (
          <>
            <span className={css.underline}>well designed</span> and{' '}
            <span className={css.underline}>fully responsive </span>website like
            this one,
          </>
        ),
        props: {
          fontSize: '4xl',
          textAlign: 'center',
          color: 'black',
          width: '650px',
          transform: {
            base: 'scale(0.7) translateX(-220px) translateY(-75px)',
            xl: 'scale(0.8) translateX(-130px) translateY(-35px)',
            '2xl': 'scale(0.95) translateX(-80px)',
          },
          as: 'h2',
        },
        duration: 1000,
        delay: 1500,
      },
    ],
    replies: [
      {
        text: "I'm listening...",
        nextStage: 5,
        isPrimary: true,
      },
      {
        text: "I don't.",
        nextStage: 7,
        isPrimary: false,
      },
    ],
    repliesDelay: 3000,
  },
  {
    stage: 5,
    elements: [
      {
        text: 'contact me',
        props: {
          fontSize: '7xl',
          textAlign: 'center',
          color: 'black',
          transform: {
            base: 'scale(0.85) translateX(-150px) translateY(-50px)',
            xl: 'translateX(-150px) translateY(-25px)',
            '2xl': 'translateX(-150px)',
          },
          as: 'h1',
        },
        duration: 1000,
        delay: 1000,
      },
      {
        text: "and let's talk!",
        props: {
          fontSize: '5xl',
          textAlign: 'right',
          color: 'black',
          pl: 40,
          transform: {
            base: 'scale(0.7) translateX(-200px) translateY(-80px)',
            xl: 'scale(0.85) translateX(-250px) translateY(-35px)',
            '2xl': 'translateX(-250px)',
          },
          as: 'h2',
        },
        duration: 1000,
        delay: 1500,
      },
    ],
    replies: [
      {
        text: 'You got it.',
        nextStage: 6,
        isPrimary: true,
      },
      {
        text: 'Not right now.',
        nextStage: 6,
        isPrimary: false,
      },
    ],
    repliesDelay: 3000,
  },
  {
    stage: 6,
    elements: [
      {
        text: 'Great!',
        props: {
          fontSize: '8xl',
          textAlign: 'center',
          color: 'black',
          ml: 6,
          mt: -4,
          transform: {
            base: 'scale(0.8) translateX(-150px) translateY(-50px)',
            xl: 'translateX(-120px) translateY(-20px)',
            '2xl': 'translateX(-120px)',
          },
          as: 'h1',
        },
        duration: 1000,
        delay: 1000,
      },
      {
        text: 'Thanks for chatting with me.',
        props: {
          fontSize: '4xl',
          textAlign: 'right',
          color: 'black',
          ml: 6,
          transform: {
            base: 'scale(0.8) translateX(-200px) translateY(-70px)',
            xl: 'scale(0.85) translateX(-220px) translateY(-30px)',
            '2xl': 'translateX(-250px) translateY(0px)',
          },
          as: 'h2',
        },
        duration: 1000,
        delay: 1500,
      },
    ],
    replies: [
      {
        text: 'Explore projects',
        nextStage: 6,
        isPrimary: true,
        action: ({ router }) => {
          router.push('/projects/explore');
        },
      },
      {
        text: 'Get in touch',
        nextStage: 6,
        isPrimary: false,
        action: () => {
          document.getElementById('homepage-section-contact')?.scrollIntoView();
        },
      },
    ],
    repliesDelay: 2000,
  },
  {
    stage: 7,
    elements: [
      {
        text: 'Oh...',
        props: {
          fontSize: '8xl',
          textAlign: 'left',
          color: 'black',
          ml: 2,
          mt: -4,
          transform: {
            base: 'scale(0.8) translateX(-70px) translateY(-40px)',
            xl: 'translateX(20px) translateY(-10px)',
            '2xl': 'none',
          },
          as: 'h1',
        },
        duration: 1000,
        delay: 1000,
      },
      {
        text: 'Talk to you another time then.',
        props: {
          fontSize: '4xl',
          textAlign: 'right',
          color: 'black',
          ml: 4,
          transform: {
            base: 'scale(0.7) translateX(-180px) translateY(-70px)',
            xl: 'scale(0.8) translateX(-210px) translateY(-20px)',
            '2xl': 'translateX(-235px)',
          },
          as: 'h2',
        },
        duration: 1000,
        delay: 1500,
      },
    ],
    replies: [
      {
        text: 'Goodbye.',
        nextStage: 8,
        isPrimary: true,
      },
      {
        text: 'I was joking...',
        nextStage: 10,
        isPrimary: false,
      },
    ],
    repliesDelay: 2000,
  },
  {
    stage: 8,
    elements: [
      {
        text: '...',
        props: {
          fontSize: '9xl',
          textAlign: 'center',
          color: 'black',
          mr: 64,
          mt: -8,
          transform: {
            base: 'translateX(20px) translateY(-40px)',
            xl: 'translateX(20px) translateY(-10px)',
            '2xl': 'none',
          },
          as: 'h1',
        },
        duration: 1000,
        delay: 1000,
      },
    ],
    replies: [
      {
        text: '...',
        nextStage: 9,
        isPrimary: false,
      },
    ],
    repliesDelay: 1500,
  },
  {
    stage: 9,
    elements: [
      {
        text: 'Well, this is awkward...',
        props: {
          fontSize: '5xl',
          textAlign: 'left',
          color: 'black',
          ml: 4,
          mt: 8,
          transform: {
            base: 'scale(0.8) translateX(-110px) translateY(-40px)',
            xl: 'scale(0.9) translateX(-45px) translateY(-20px)',
            '2xl': 'none',
          },
          as: 'h1',
        },
        duration: 1000,
        delay: 1000,
      },
      {
        text: 'Why are you still here?',
        props: {
          fontSize: '4xl',
          textAlign: 'left',
          color: 'black',
          ml: 6,
          transform: {
            base: 'scale(0.75) translateX(-70px) translateY(-60px)',
            xl: 'scale(0.85) translateX(0px) translateY(-25px)',
            '2xl': 'none',
          },
          as: 'h2',
        },
        duration: 1000,
        delay: 1500,
      },
    ],
    replies: [
      {
        text: "I'm not sure...",
        nextStage: 10,
        isPrimary: true,
      },
      {
        text: 'Ok. Goodbye.',
        nextStage: 10,
        isPrimary: false,
        action: ({ setShowReplyBox }) => {
          setShowReplyBox(false);
          document
            .getElementById('homepage-section-projects')
            ?.scrollIntoView();
        },
      },
    ],
    repliesDelay: 2500,
  },
  {
    stage: 10,
    elements: [
      {
        text: "Let's start over.",
        props: {
          fontSize: '7xl',
          textAlign: 'left',
          color: 'black',
          mt: 4,
          transform: {
            base: 'scale(0.75) translateX(-100px) translateY(-60px)',
            xl: 'scale(0.9) translateX(-35px) translateY(-10px)',
            '2xl': 'none',
          },
          as: 'h1',
        },
        duration: 1000,
        delay: 1000,
      },
      {
        text: 'What do you say?',
        props: {
          fontSize: '4xl',
          textAlign: 'left',
          color: 'black',
          ml: 16,
          transform: {
            base: 'scale(0.8) translateX(-40px) translateY(-70px)',
            xl: 'scale(0.85) translateX(0px) translateY(-15px)',
            '2xl': 'none',
          },
          as: 'h2',
        },
        duration: 1000,
        delay: 1500,
      },
    ],
    replies: [
      {
        text: "Let's do it.",
        nextStage: 1,
        isPrimary: true,
      },
      {
        text: 'No, thank you.',
        nextStage: 10,
        isPrimary: false,
        action: ({ setShowReplyBox }) => {
          setShowReplyBox(false);
          document
            .getElementById('homepage-section-projects')
            ?.scrollIntoView();
        },
      },
    ],
    repliesDelay: 2000,
  },
];
