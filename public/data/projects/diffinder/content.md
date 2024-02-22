I was hearing rumors about [a new and exciting Javascript framework](https://www.solidjs.com) that checks all the important boxes:

- simple & lightweight
- super fast
- has familiar syntax
- uses [signals](https://www.solidjs.com/guides/reactivity)

<p style="margin-top: 10px">So I thought - what's a better way to learn about it, then to use it to make an oldschool puzzle game - Find the difference?</p>

# The game

Find the difference is a visual game where the goal is to find and mark all differences between two images.

I used to play it all the time as a kid... but not online. I would find it in those crossword magazines and mark all the differences with a pen. Then I would check the results on the last page of the magazine.

<div class="custom-flexible-layout-60-40" style="margin-top: 20px">

<div>

I knew that playing such a game in digital form wouldn't feel the same. However, I was hoping that maybe the digital form can also have some benefits and perhaps introduce some new aspects to the game... which it did.

I created some additional rules in order to give the player more of a challenge:

<br />

<details style="font-size: 1.35rem; margin-bottom: 10px"><summary>Time limit</summary>
<span style="font-size: 0.96rem">You have 3 minutes to find all differences!</span>
</details>
<details style="font-size: 1.35rem; margin-bottom: 10px"><summary>Difficulty</summary>
<span style="font-size: 0.96rem">Depending on how far your guess was from the actual difference, you get a certain amount of points.</span>
</details>
<details style="font-size: 1.35rem; margin-bottom: 10px"><summary>Mistakes</summary>
<span style="font-size: 0.96rem">Clicking on a part of the image which is not different counts as a mistake. Three mistakes and you're out!</span>
</details>

</div>
<img src="https://i.imgur.com/1Y2cmxP.png" alt="Spot the difference game in the newspaper" style="height: 400px; object-fit: contain;" />
</div>

# Images

Diffinder features a library of 12 hand picked (mostly AI generated) images. All images were taken from Pixabay and you can find the sources [here](https://github.com/DoubleDebug/diffinder?tab=readme-ov-file#image-source-links).

I modified each image and saved the difference data in JSON files. Each file contains data about difference coordinates, image paths, difficulty level, etc. It looks something like this:

```json
{
  "id": 1,
  "name": "Cabin house",
  "image-left": "cabin-house-1.webp",
  "image-right": "cabin-house-2.webp",
  "difficulty": "easy",
  "differences": [
    {
      "x": 207,
      "y": 114
    },
    {
      "x": 776,
      "y": 453
    }
  ]
}
```

# My thoughts on SolidJS

Overall, a very solid framework! 😅

All jokes aside, the developer experience while working with SolidJS was enjoyable. After initially reading the docs, I rarely found myself going back and looking for answers. This signals that the framework is predictable and easy to use, which is always a good thing.

<br />

- The syntax feels familiar - anyone who's worked with Typescript and JSX will fit right it. It feels like a bridge between vanilla Javascript and React.

- The requirements for this project were very simple and straightforward, so it was unlikely that I was going to run into trouble. If this was an otherwise enterprise level web application, I probably wouldn't go with SolidJS because I don't know how it would scale and if community support is good enough.

<div class="custom-flexible-layout" style="margin-top: 20px; margin-bottom: 20px;">

<img style="height: 300px; object-fit: cover" alt="SolidJS library" src="https://i.imgur.com/XoFwyVw.png" />

<p style="margin-left: 20px"><span style="font-size: 2rem">•</span>&nbsp; Signals are awesome! They single-handedly solve some of the biggest problems in React and other frontend frameworks, such as state management, reactivity and performance. They also work with plain old Javascript, making them framework independent. This means that you don't have to worry about the <a href="https://legacy.reactjs.org/docs/hooks-rules.html">React rules of hooks</a>, for example.</p>

</div>

<p style="margin-bottom: 20px">I recently read a YouTube comment about React hooks. It said something along the lines of:</p>

> The dependency array in React is a framework leak.
> <br />
> It makes the developer worry about something that should've been handled by the framework.

... and I agree 100%. Frameworks like SolidJS and Svelte have already solved this, and apparently, React is jumping on the wagon as well, according to [Andrew Clark](https://twitter.com/acdlite/status/1758229889595977824).
