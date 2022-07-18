On today's episode of overengineering, I'm making an interactive dialogue mini game in React. If you're reading this article, chances are that you've already seen it — but here is a [link](/) anyway.

The setup: you're talking to an avatar with headphones and an uninspired facial expression. Whenever he says something, you can choose your reply. Different replies lead the conversation in different paths, mimicing a real life conversation. Although there are only 3 possible outcomes, this mini AI gives you quite a few possible paths to explore and hopefully catch your attention as soon as you visit the website.

<img src="https://i.imgur.com/m7iyWz8.png" alt="Double Debug Dialogue component" style="aspect-ratio: 1093 / 739;" />

# The Logic

To represent different stages of the conversation, I used a <code>state machine</code> ... or if you like math, a directed <code>graph</code>. This is not only a great way to visualize the problem, but also the exact structure I used for the logic of the component. Behind the scenes, this avatar knows of all the dialogue stages and for each of them, he knows which reply leads to which stage.

![Dialogue decision branching example](https://i.imgur.com/FDnQaqB.png)

Each node in the graph represents a dialogue stage, which holds information about the avatar's sentence, and the two replies — all in a POJO (plain old javascript object).

Each reply also holds a number, pointing to the next node in the graph. There are 10 nodes in total, so the full graph looks like this:

![Dialogue full decision graph](https://i.imgur.com/S0EtLN2.png)

If we take a closer look at one of the nodes, for example Node 1, we can see that it holds the first sentence of the conversation. The avatar says:

> _I'm DoubleDebug, a full stack web developer._

and you can reply with either

> _Nice to meet you_, or<br />_I'm not interested_.

The first reply has a property called <code>nextStage</code> with a value of 2, which means that it leads to the second graph node.

<div style="display: grid; grid-template-columns: 50% 50%; width: 100%; justify-content: center">
    <img src="https://i.imgur.com/FbLEliC.png" alt="First graph node" />
    
```json
{
  "stage": 1,
  "sentences": ["I'm Double Debug,",
                "a full stack web developer."],
  "replies": [
    {
      "text": "Nice to meet you, Double Debug!",
      "nextStage": 2
    },
    {
      "text": "I'm not interested...",
      "nextStage": 7
    }
  ]
}
```

</div>

Some nodes are a dead end and they point to themselves. For example, if you find yourself on Node 10, the avatar prompt is "Let's start over. What do you say?". If you choose to reply with "No, thank you", you will be scrolled down to the next section of the website and the conversation is over.

Other nodes, such as Node 6, are considered "successful" nodes because they've led you to the end of the sequence and of this <code>Call To Action (CTA)</code> component. Node 6 offers you two replies, but both of these replies are **actions**. You can either explore my past projects or you can head to the "Hire me" section.

<div style="display: grid; grid-template-columns: 50% 50%; width: 100%; justify-content: center">
    <img src="https://i.imgur.com/yWAIIru.png" alt="Graph Node number 6" />
    
```json
{
  "stage": 1,
  "sentences": ["Great!",
                "Thanks for chatting with me."],
  "replies": [
    {
      "text": "Explore projects",
      "nextStage": 6,
      "action": ({ router }) => {
          router.push('/projects/explore');
        }
    },
    {
      "text": "Hire me",
      "nextStage": 6,
       "action": () => {
          window.scrollTo(0, 5000);
        }
    }
  ]
}
```

</div>

As you can see, Node 6 has a new field under "replies", called <code>action</code>. It defines what will happen if you choose a certain reply. In this case, choosing "Explore projects" will send you to the "projects/explore" page and choosing "Hire me" will scroll the page to the contact section.

# The UI

The HTML is very simple. The avatar is a rounded image sitting on the left side — this is the only static part of the component. On the right side is a relative div, which holds two children - the speech bubble and the reply box. The speech bubble is a transparent image with absolute positioning and a negative z-index. On top of it is an h2 heading tag with one or two pieces of text. The reply box is also absolutely positioned and displays a grid of two full width buttons.

The key element of the UI, however, are the <code>CSS animations.</code> In order to get the user to focus on the conversation and to keep his eyes on the speech bubble, I decided to play a fade-in animation for all of the text. This is where my **overengineering** kicks in. In hindsight, it would've been a lot easier to generate static speech bubble images and just transition between them with a fade-in-out effect. This would've avoided storing all the data for each individual node, as well as the triviality of pinpointing the duration of each CSS animation. But no... we like to suffer around here. :slightly_smiling_face:

```json
{
    "stage": 6,
    "sentences": [
      {
        "text": "Great!",
        "props": {
          "fontSize": "8xl",
          "textAlign": "center",
          ...
        },
        "duration": 1000,
        "delay": 1000,
      },
      {
        "text": "Thanks for chatting with me.",
        "props": {
          "fontSize": "4xl",
          "textAlign": "right",
          ...
        },
        "duration": 1000,
        "delay": 1500,
      },
    ],
    "replies": [
      ...
    ],
    "repliesDelay": 2000,
  },
```

To be clear, the examples shown above are simplified for the sake of this blog. In reality, each node has a lot more properties and most of them hold information about the UI of this component. If we take a closer look at one of the nodes, we can see properties such as <code>duration</code> and <code>delay</code>, which are applied directly to the CSS of the h1 element. We also have react component props, such as <code>fontSize</code> and <code>textAlign</code>. These are props for [Chakra](https://chakra-ui.com) components, which is the UI framework I chose for this website.

<br />
<br />

<div style="display: grid; grid-template-columns: 60% 40%; width: 100%; column-gap: 1rem; align-items: center;">

```ts
const Dialogue: React.FC = () => {
  const [stageNumber, setStageNumber] = useState<number>(1);
  const currentStage = useMemo(
    () => dialogueData.filter((s) => s.stage === stageNumber)[0],
    [stageNumber]
  );

  return (
    ...
  );
}
```

On a higher level, we have a Dialogue react component which holds state regarding the current stage of the conversation with the avatar.

</div>

<div style="display: grid; grid-template-columns: 40% 60%; width: 100%; align-items: center;">

Whenever I choose a reply, I will update the current stage of the conversation and set it to <code>nextStage</code> number of the chosen reply.

```ts
const Dialogue: React.FC = () => {
  ...

  return (
    ...
    {currentDialogueStage.sentences.map(element => (
        <Text>{element.text}</Text>
    ))}
    ...
    {currentDialogueStage.replies.map(reply => (
      <Button
        onClick={() => setStageNumber(reply.nextStage)}
      >
        {reply}
      </Button>
    ))}
  );
}
```

</div>

# Conclusion

All overengineering jokes aside, this was a really fun mini project. I've always liked playing video games and one of the reasons for that is because of the amount of choices you have as a player. The power to change the outcome of the game. And even though I didn't grow up to be a game developer (at least not yet — you never know), I always try to incorporate that interactivity aspect into my websites.
