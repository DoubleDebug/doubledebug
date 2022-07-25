Random Persona is a RestAPI for generating random personnal data, such as:

<div class="custom-flexible-layout">

<div>

- first name,
- last name
- gender,

</div>

<div>

- age,
- occupation and
- avatar images.

</div>

</div>

<br />

The API originally had one signle endpoint that generated all the fields mentioned above. However, in the next iteration, I decided to split them up into separate endpoints in case people needed specific fields of personnal data. In version 1.1, I've also added an option to request data in bulk — I've added a quantity parameter to all of the endpoints.

- <span style="color: #ED8936;">/random-persona</span> (first & last name, gender, age, occupation, avatar)
- <span style="color: #ED8936;">/random-name</span> (first & last name, gender)
- <span style="color: #ED8936;">/random-occupation</span> (occupation)
- <span style="color: #ED8936;">/random-avatar</span> (gender, avatar)

# Data sources

The data is static and taken from these sources:

- https://www.verywellfamily.com
- https://www.rong-chang.com
- https://www.careerprofiles.info

<br />

<video width="100%" autoplay muted loop>
    <source src="https://i.imgur.com/MSMEI6H.mp4" type="video/mp4">
</video>

# Usage example (Tinder-like page)

While working on this API, the frontend developer in me decided that it would be a good idea to put this API to use and create a visual example of random personas. The first thing that came to mind was Tinder and their awesome swipe left-right user interface.

The source code of this demo is a ~100 line script that fetches data from the API and attaches it to the card. If you're interested, you can check it out [here](https://github.com/DoubleDebug/random-persona-example).

# Documentation

Find the OpenAPI specification (generated using the SwaggerUI tool) [here](https://random-persona.herokuapp.com).
