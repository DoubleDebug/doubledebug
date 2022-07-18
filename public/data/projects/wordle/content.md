# How this project came about

I wanted to challenge myself and see how fast I can code a clone of Wordle, the popular word game everybody's been tweeting about. In case you've been living under a rock, which wouldn't be a bad idea nowadays, let me explain the rules of this game.

- You have 6 tries to guess a 5 letter word.
- You have no information about the secret word, so your first guess has to be random.
- However, after every guess, for each letter in your word, you can see if the secret word contains it or not.
- After you guess, letters of your word will be painted:
  - <span style="color: #666666; font-weight: bold">GRAY</span> (if the secret word doesn't contain it),
  - <span style="color: #DBC379; font-weight: bold">YELLOW</span> (if the secret word contains it, but it's in an incorrect place)
  - or <span style="color: #78A55A; font-weight: bold">GREEN</span> (if the secret word contains it and it's in the correct place).
- The game ends when you:

  - successfully guess the secret word, or
  - you run out of guesses.

  <br />

This game was made for a YouTube video and I was supposed to code these rules as fast as possible and I managed to do it in around 20 minutes. If you're interested to see the full process, check out the video below and let me know what you think in the comments!

<div style="display: flex; justify-content: center; margin-top: 2rem;"><iframe width="90%" height="600" src="https://www.youtube.com/embed/oKM2nQdQkIU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

# Edge cases

Before starting to code a game, I think it's really important to write down the rules and clear up all the confusions and possible edge cases. As a player, you don't think too much about the rules and how it all works behind the scenes — and you shouldn't. But when you're coding it and when you're defining the rules in computer terms, you really have to get into the nitty gritty details and explore all the possible cases a player might go about solving the puzzle.

One particular edge case I ran into is the following one:

The secret word is <code>OFTEN</code> and your guess is <code>OFFER</code>. Here's how the letters of the word OFFER are supposed to be painted, and also what my result was.

<div style="width: 500px; margin-left: auto; margin-right: auto; margin-bottom: 1rem;">

| Letter | Correct color                                                | My color                                                      | Result |
| ------ | ------------------------------------------------------------ | ------------------------------------------------------------- | ------ |
| O      | <span style="color: #78A55A; font-weight: bold">GREEN</span> | <span style="color: #78A55A; font-weight: bold">GREEN</span>  | ✅     |
| F      | <span style="color: #78A55A; font-weight: bold">GREEN</span> | <span style="color: #78A55A; font-weight: bold">GREEN</span>  | ✅     |
| F      | <span style="color: #666666; font-weight: bold">GRAY</span>  | <span style="color: #DBC379; font-weight: bold">YELLOW</span> | ❌     |
| E      | <span style="color: #78A55A; font-weight: bold">GREEN</span> | <span style="color: #78A55A; font-weight: bold">GREEN</span>  | ✅     |
| R      | <span style="color: #666666; font-weight: bold">GRAY</span>  | <span style="color: #666666; font-weight: bold">GRAY</span>   | ✅     |

</div>

As you can see, there's a letter that's been painted in the wrong color. The second F in the word OFFER is yellow, even though there's no two R's in the secret word (OFTEN). This is because my initial game logic only calculated whether the current letter is contained in the secret word, regardless of all of the previous letters that have been revealed. However, this is wrong and you must take in account how many F's in this case have already been revealed. Hence, the correct color of the second F is gray.

# The animations

One thing we all know and love about Wordle is the amazing letter flipping animation when the word is revealed. The letters flipping one by one really give a feeling of something being revealed. The anticipation of waiting to see if your letter is correct or not plays a big role in making this game fun, in my opinion.

<br />

The CSS animation itself is simple and has 3 stages:

- The height of the box is slowly decreasing...
- The height of the box is 1px — the box is now a line.
- The height of the box is slowly increasing... and the box goes back to normal.

<br />

<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@imdoubled/video/7096589717013105925" data-video-id="7096589717013105925" style="max-width: 605px; min-width: 325px; margin-left: auto; margin-right: auto; margin-bottom: 1rem; border-left: none;"><section><a target="_blank" title="@imdoubled" href="https://www.tiktok.com/@imdoubled">@imdoubled</a>Did you know how easy it is to make this Wordle animation in CSS?<a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp">#fyp</a><a title="javascript" target="_blank" href="https://www.tiktok.com/tag/javascript">#javascript</a><a title="programming" target="_blank" href="https://www.tiktok.com/tag/programming">#programming</a><a target="_blank" title="♬ original sound - Double D" href="https://www.tiktok.com/music/original-sound-7096589718623668998">♬ original sound - Double D</a> </section> </blockquote><script async src="https://www.tiktok.com/embed.js"></script>

The tricky thing here is the timing when the box is painted through JavaScript. The box is supposed to switch colors exactly half-way through the animation. So, the box shrinks into a line at which point it gets painted using JavaScript, and then goes back to a box, mimicing a 3D flip.

Recreating this animation in CSS was a lot of fun — so fun that I created a TikTok video explaining the process.
