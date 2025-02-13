# How this project came about

MojReddit is a clone of the Reddit website, but with my own spin when it comes to the UI. This was so far my biggest passion project that took around 4-5 months and 90 commits to complete. Even though I plan on improving it and making changes in the future, I consider it a completed project as it is hosted on the mojreddit.com domain.

This was my first full stack web application of this scale. I had lots of fun coding it, learned plenty of new things and used technologies I've never used before.

# Features

- Home feed and custom user feed
- Subreddits
- Sign in with email/password, Google or GitHub
- 3 types of posts:
  - Text
  - Image/video
  - Poll
- Upvote/downvote posts
- Post comments
- Inbox & chatting with other redditors
- Searching for posts
- Account and profile settings

# Technology stack

Now, let's talk tech. At the beginning of development, I started out making MojReddit strictly as a frontend application. However, as I dove deeper into the features of Reddit, I realised that I needed a backend. So, in addition to Firebase, which I used as a BaaS (backend as a service), I started developing a NodeJS server. The main purpose of the server was to communicate with Firebase (along with other 3rd party services such as Algolia), so I created a RestAPI using the Express framework.

To sum things up, here's the final tech stack: <br />

### Frontend:

- React
- Typescript
- Firebase
  - Auth
  - Firestore (database)
  - Storage
  - Analytics
  - React Firebase hooks
- React Router DOM
- Material UI
- FontAwesome icons
- React Hot Toast
- React Loading Skeleton
- React Quill

<br />

### Backend:

- Node
- Express
- Typescript
- Firebase
  - Admin SDK
- Algolia search
- Node Cron

# What I learned

Throughout the project, the process of building new features was really fluent. I found myself spending most of the time writing code, instead of aimlessly testing and hopeing that everything works. I believe this was partially because of using Typescript — having everything type-checked at build time was a relief and the extra boilerplate code I had to write because of it was mostly worth it.

Firebase turned out to be, once again, a great pick. The developer experience was awesome, starting from the documentation and all the way to the convenience of setting up the analytics system. My favorite Firebase feature is the Authentication, even though I mostly just use the Firestore database. However, I do have to mention one thing — I used a 3rd party library in order to make working with hooks much easier. The library is simply called [React Firebase Hooks](https://github.com/csfrequency/react-firebase-hooks) and it takes care of all the boilerplate code related to Firebase (and also makes sure you don't send an infinite number of requests by writing it yourself, which has happened before... but not to me, of course :smiley:).

<br />

![Moj Reddit main technologys stack](https://i.imgur.com/lsgBRD2.png)

<br />

I leared that the Algolia search engine is amazing — so much customizability, so fast and easy to setup. For smaller projects with search features, it can even be used as a primary database.

I also learned that writing a RestAPI Node server can be lots of fun! I even wrote the documetation for it using Swagger (another awesome tool), which you can find [here](https://moj-reddit-backend.onrender.com). But most importantly, I learned how big of a challenge it is to write a full stack web application from start to finish. It was one of those things where I found myself quoting Socrates, saying that _I know only one thing — I know nothing._ It is very time consuming, requires lots of patience and will to go on, but it is also very rewarding, because finishing a 5 month project was the best thing ever.
