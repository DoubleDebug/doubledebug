"Implement your own" is a series of JavaScript exercises where I try to rewrite existing JavaScript features and classes in order to understand them better. The original idea comes from a YouTube creator called [Web Dev Simplified](https://www.youtube.com/WebDevSimplified). Kyle from WDS has amazing educational content revolving mainly around JavaScript and web development.

In one of his [videos](https://youtu.be/BiblrzKMllc), he implemented some of the standard array functions that are built in the JavaScript language, such as:

- map,
- forEach,
- filter,
- reduce,
- some,
- every

and so on. I thought this was a great exercise and wanted to try it for myself before continuing to watch the video. I also think this is a good way of showing how deep is your understanding of the language. It's easy to read the manual and use something, but can you build it from scratch?

<br />

Another WDS [video](https://youtu.be/1l4wHWQCCIc) was about rewriting the Promise class in JavaScript. I'm talking about methods like:

- then,
- catch,
- finally,

and even static methods:

- all,
- race
- and any.

The thing about rewriting these methods and classes is that it's fairly easy to test them. To see if your method works correctly, you compare your results with the results you got from the actual method you're rewriting. In the case of Promises, you can replace the Promise class with your implementation called MyPromise and see if you get the same outcome.

# Testing

Speaking of testing, something really convenient about Kyle's videos of this sort is that he provides a test file for each of these implementations. All you have to do is write the code and run the tests to see if you're correct. Very clean and convenient — and if you're interested to try this out for yourself, you can find the test file for the Array and Promise implementations [here](https://github.com/WebDevSimplified/array-methods-library) and [here](https://github.com/WebDevSimplified/js-promise-library), respectfully.

<br />

<img src="https://i.imgur.com/FnoGdMi.png" alt="Rewritting JavaScript array methods" style="aspect-ratio: 838 / 601; width: 800px !important; margin-left: auto; margin-right: auto;">

<br />

He's using the standard <code>Jest</code> testing library and even though the tests don't cover 100% of the actual codebase, it's more than enough for the scope of this exercise. It's also very satisfying to see all the green colors after you run the tests!

<br />

<img src="https://i.imgur.com/amoQdgQ.png" alt="Rewritting JavaScript Promise methods" style="aspect-ratio: 832 / 762; width: 800px !important; margin-left: auto; margin-right: auto;">

<br />
