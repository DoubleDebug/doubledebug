![How to bot a webiste - YouTube thumbnail](https://i.imgur.com/XuZQjDi.jpg)

Have you been in a scenario where you want to use some data from a website, but there's no public API available? Well today, web scraping is easier than ever and you can do it with just a few lines of code. Modern libraries such as [Puppeteer](https://www.npmjs.com/package/puppeteer), [Selenium](https://www.npmjs.com/package/selenium-webdriver), [Playwright](https://www.npmjs.com/package/playwright) and others do an excellent job of simplifying this process for you and making it super beginner friendly.

# What is web scraping?

Web scraping is the process of **extracting data from a website**. This is done programmatically — you can code a bot and tell it where to navigate to, which part of the website to grab, where to click, type or even take a screenshot. This can be useful in many ways. As I mentioned before, some online services don't have a public API that you can access. So, some people might use web scraping to directly navigate a website, extract data they need and use it for their web application.

Some people might scrape some weather data from a weather channel and use for their IOT application... Some might use it for cryptocurrency price monitoring. Others might create a Twitter bot that displays the latest Elon Musk tweet on their homepage. The possibilities are endless.

# How difficult is it?

Not at all. Using a modern Javascript library like [Puppeteer](https://www.npmjs.com/package/puppeteer), web scraping is very beginner friendly and it can be done with very few lines of code, depending on what exactly you want to scrape.

If you'd like to try it, I encourage you to follow my YouTube tutorial where I described the process, step by step.

<div style="display: flex; justify-content: center; margin-top: 2rem; margin-bottom: 2rem;"><iframe width="90%" height="600" src="https://www.youtube.com/embed/NiIZ156wAP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

In this example, I created a NodeJS API that navigates to google.com and retrieves all autocomplete suggestions for a specified text. I created a function called <code>getGoogleSuggestions</code> that takes the search query as the only argument. As I explained in the video, the bot navigates the website exactly the same way a person would.

First, he opens a new tab and types in the address - google.com. Next, he clicks on the search box and types the search query. After that, the list of autocomplete suggestions pops up below the search bar. This is where we can target these DOM elements using CSS selectors (id, class name, tag name, etc). For this case, I needed to use tag names for selecting them because:

<blockquote>

_Fun fact: For some DOM elements, Google uses a CSS preprocessor that randomizes class names._

</blockquote>

I assume this is a way of discouraging web scraping on their website, but don't quote me on that. Either way, I couldn't use id's or class names to select the suggestions, so I went with their tag names, which isn't always possible to do.

<img src="https://i.imgur.com/TxhaRU8.png" alt="Google suggestions example" style="max-height: 500px; width: 80%; margin: 0 auto 1rem auto;">

Once I selected all the google suggestions, I filter and format them in a way that's more consumable. The final result of this function is a string array of Google suggestions and the function is exposed on a RestAPI endpoint.

# The disadvantages

One big question mark when it comes to web scraping is — **is it legal**? The answer is that it depends on the website. Some websites, such as Twitter, disallow web scraping, according to their [TOS](https://twitter.com/en/tos).

<blockquote>

_"...scraping the Services without the prior consent of Twitter is expressly prohibited."_

</blockquote>

However, scraping publicly accessible data is legal and there are thousands of services that scrape Twitter data every day. This is the case with many other websites, too, and this is why web scraping is a notorious legal gray area.

<hr />

Other, perhaps more interesting disadvantage is that if you're web scraping data for your website, you will always rely on 3rd party websites. If the service you're scraping for some reason isn't available today, your website won't be either. If the website's servers are really slow for some reason, your load times will be very high as well.

This is the downside you have to deal with when relying on 3rd party websites for data.

Speaking of load times, even if the website works completely fine, web scraping is generally **a slow process**. In the Google suggestions example, I was using Node and Puppeteer and I was getting my results after 1.4 seconds on average. In a world where APIs are expected to respond within 200ms or under, this is really slow. This is definitely a factor you should consider before committing to the web scraping approach in your application.
