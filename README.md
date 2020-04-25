# System Design Exploration
A dive into the challenges of scaling a database for high volume applications and optimizing the back-end to handle that volume without sacrificing user experience.

# Table of Contents
- [Goals](#goals)
- [Workflow](#workflow)
- [Challenges](#challenges)
- [Tech Stack](#tech-stack)

# Goals
The high level goals for this project were to learn and experiment with database scaling and management, while also optimizing the server to handle the heavy load and additional stress.

# Workflow
I first researched different databases and settled on using PostgreSQL, which I then seeded with 10 million rows of dummy data.  After setting up my back-end route handling, I did my first test with Postman to see the response time from the server locating 1 record from the database.  From there I worked to reduce that time by optimizing my routes and database queries, and tested those changes with Apache Bench.  Lastly I implemented indexing to my database to speed up my queries more and again tested with Apache Bench.

# Challenges

# Tech Stack

