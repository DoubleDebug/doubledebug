ProbCut was a college group project for a class called "Object oriented design". It was a 3 month project that I worked on with two of my friends/colleagues. We had a schedule in place and part of the project was to see the real world benefits and downsides of working with a team and trying to stick to a schedule. We also wrote the documentation for all features of the project, regarding both the front and backend.

I always enjoy looking back at the 3 months spent on this project, mainly because of all the planning and collaborating with my colleagues.

# Technology stack

- C# (backend)
- [Razor Pages in ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/razor-pages) (backend)
- Page-Model approach
- HTML, CSS & Javascript (frontend)
- Bootstrap (CSS library)

<br />

If I were to start a project today, I wouldn't pick this technology stack. However, at the time, my team (myself included) wasn't very familiar with any JavaScript frameworks. We've mostly been working with C-like languages (C, C++, C# & Java), so we picked the web framework closest to what's familiar to us, which is the ASP.NET Core Razor Pages technology. The frontend code was written in plain Javascript, HTML and CSS and we used Bootstrap as our CSS component library.

# Features

- Homepage
- Pricing page
- User administration
  - user registration
  - user sign in
  - adding a new barber
  - updating profile information
- Appointment scheduling
- Barber rating system
- User management
- Communication between users
- Two language options

# What I learned

This was my first ever web application, so I learned a lot from this project. I didn't know much about HTML and vanilla Javascript, so a complex framework like Razor pages had a high learning curve for me. At times, it felt like I skipped a few steps, which — looking back at it now, is definitely true. I remember that throughout the project I found myself struggling to even understand the difference between server side and client side code. However, it gave me a decent introduction into the world of web frameworks and showed me the potential of web development.

I learned how to use the Page-Model approach in the Razor pages technology. I learned how annotations work in CSHTML files and C# models. The annotations reminded me of JSF (Java Server Faces), which is another Java web framework we used in college.

```csharp
namespace ProbCut.Models
{
    public class Barber : User
    {
        public IList<Appointment> appointments { get; set; }
        public IList<Comment> comments { get; set; }

        [Required]
        public string firstName { get; set; }
        [Required]
        public string lastName { get; set; }
        [Required]
        public string phoneNumber { get; set; }
        [Required]
        public IList<int> ratings { get; set; }
        [NotMapped]
        public override string typeOfUser { get { return "F";  } }

        public float getAverageRating() { return ratings.Average(); }
    }
}
```

I learned how to bind form inputs to C# model properties. I learned how to write handler methods in C# that validate forms and perform CRUD (create-read-update-delete) operations on the database.

I learned all about database context, asynchronous data fetching and migrations. I applied the previous knowledge I had about SQL queries and data modeling.

<br />

<hr />

<br />

Even though Razor pages is not a technology that's very popular today, I have a fond memory and a positive experience using it. If I ever decide to create a backend written in C#, I will definitely go back to it, only this time with a lot more knowledge about Javascript and web development in general.
