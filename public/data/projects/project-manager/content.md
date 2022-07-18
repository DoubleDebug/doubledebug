Project manager is a web app for organizing your projects and tracking their progress. It's a simple to do list style application where you can easily mark the stage of each task as:

- to do
- in progress, or
- finished.

This was my 3rd year college project for a course called "Web application development" and the main goals were to learn Typescript, RxJS, asynchronous code and the MVC (model-view-controller) project structure.

# Learning from my mistakes

I didn't use any front end framework in the development of this project, so the codebase is pretty messy. Looking back at the project almost 2 years after, I found myself struggling to find where certain components are and trying to figure out whether a piece of code is related to the ui or the business logic.

Since there's no front end framework, there's a lot of boilerplate code where I create and add DOM elements to the page. Even though this project follows the MVC structure, there's a very loose line between the view and the actual data.

There's lots of things I would change about this project, however, it was the first ever app I wrote completely in Typescript. It introduced me to the language and showed me all the benefits of it, even though it was a hazard at the beginning because of all the extra code I needed to write.

# RxJS

One very important thing I learned throughout this project is the concept of <code>Observables</code>. It was also an introduction to the declarative paradigm and a different way of thinking, especially considering the fact that I only used C-like languages before this.

The use cases of RxJS in this project were definitely questionable, however. The college assignment stated that we had to use a list of RxJS operators and there were points in time where I found myself trying to force the concept onto certain features of the app. It wasn't very good, but it did accomplish the idea of introducing me to the world of observables, so there's that side to it as well.

There was a specific scenario where I was supposed to use the <code>takeUntil</code> operator and I came up with the following idea:

- For each of your to-do lists, you can choose a cover image.
- You can only choose from a pre-selected set of images.
- The way you choose is by watching a slideshow of images and clicking "STOP" whenever your favorite one shows up.

<br />

I figured this is a very odd approach for such a simple thing like picking an image, but it created a scenario where I have 2 observables:

- One that emits a value every second and switches the image, creating a slideshow, and
- One that emits a value whenever the user clicks "STOP".

This way, I can subscribe to the second observable, but only **take values until** the user clicks stop.

```js
interval(1000)
  .pipe(takeUntil(fromEvent(btnElement, 'click')))
  .subscribe((num: number) => {
    imgElement.src = imageSources[num];
  });
```

As I mentioned, the use case is a bit questionable, but it helped me fully understand how observables work and where to use them. One website that really helped with that was [RxMarbles](https://rxmarbles.com) where you can visualize how each RxJS operator works. The illustration is simple — every circle is a value and every line is a stream of values emitted over time. The third and final line is the result after applying the operator, which is in this case **takeUntil**.

It brings the concept closer in a _Explain it to me like i'm 5_ type of way.

![Visual representation of the TakeUntil RxJS operator](https://i.imgur.com/nCTSxB3.png)

# Data fetching

This project introduced me to <code>asynchronous programming</code>. I worked with <code>Promises</code>, data fetching from a fake local database, handling errors and handling "loading" and "has-loaded" states.

Data about a user and his to-do lists is stored in a single db.json file. I used the [JSON Server](https://www.npmjs.com/package/json-server) library which was quite useful for this project. It supports relational data modeling, sorting, pagination and even full-text search.
