ProbCut was a college group project for a class called "Object oriented design". It was a 3 month project that I worked on with two of my friends/colleagues. We had a schedule in place and part of the project was to see the real world benefits and downsides of working with a team and trying to stick to a schedule. We also wrote the documentation for all features of the project, regarding both the front and backend.

I always enjoy looking back at the 3 months spent on this project, mainly because of all the planning and collaborating with my colleagues.

- C# (backend)
- [Razor Pages in ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/razor-pages) (backend)
- Page-Model approach
- HTML, CSS & Javascript (frontend)
- Bootstrap (styling library)

The technology stack is not something I would pick today, if I were to start a project. However, at the time, my team (myself included) wasn't very familiar with any JavaScript frameworks or even web technologies. We've been working mostly with C-like languages (C, C++, C# & Java), so we picked the closest thing to a web application, which is the C# .NET Core technology. The frontend code was written in plain Javascript, HTML and CSS and we used Bootstrap as our component library.

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

This was my first ever web application, so I learned a lot from this project. I didn't know much about HTML and vanilla Javascript, so jumping into a complex framework like Razor pages had a high learning curve. At times, it felt like I skipped a few steps which is definitely true, looking back at it now. I remember that throughout the project I found myself struggling to even understand the difference between server side and client side code. However, it gave me a decent introduction into the world of web frameworks and showed me the potential of web development.

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

I learned how to bind form inputs to C# model properties. I learned how to write handler methods in C# that validate forms and perform CRUD (create-read-update-delete) operations in the database.

I learned all about database context, migrations and I wrote SQL queries in a real world project for the first time.
