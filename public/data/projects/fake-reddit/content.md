# How this project came about

FakeReddit is a clone of the Reddit website, but with my own spin when it comes to the UI. This was so far my biggest passion project that took around 4-5 months and 90 commits to complete. Even though I plan on improving it and making changes in the future, I consider it a completed project as it is hosted on the fake-reddit.com domain.

This was my first full stack web application of this scale. I had lots of fun coding it, learned plenty of new things and used technologies I've never used before.

# The tech stuff

Now, let's talk tech. At the beginning of development, I started out making FakeReddit strictly as a frontend application. However, as I dove deeper into the features of Reddit, I realised that I needed a backend. So, in addition to Firebase, which I used as a BaaS (backend as a service), I started developing a NodeJS server. The main purpose of the server was to communicate with Firebase (along with other 3rd party services such as Algolia), so I created a RestAPI using the Express framework.

To sum things up, here's the final tech stack:

<div style="display: grid; grid-template-columns: 50% 50%;">

### Frontend:

### Backend:

<div>

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

</div>

<div>

- Node
- Express
- Typescript
- Firebase
  - Admin SDK
- Algolia search
- Node Cron

</div>

</div>

# Features
