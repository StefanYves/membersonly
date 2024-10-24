# Members-Only 

A web application where users can write and view messages. Users must sign in or log in to participate, and only members can see who wrote each message and the timestamp. Members can become admins, and admins have the ability to delete messages.

# Link to Project

Link: https://membersonly-tlh2.onrender.com/home

# How It's Made

Tech used: Node.js, Express, PostgreSQL, EJS, Passport.js

This Members-Only Message Board is built using Node.js for the server-side logic and Express as the web framework. PostgreSQL is used as the database to store user messages, user roles, and membership statuses. EJS is utilized as the templating engine for rendering dynamic content on the front-end, and Passport.js is employed for user authentication.

# Features

User Authentication: Users can sign up and log in to access the application.

Member-Only Features: Only members can see the author and timestamp of messages.

Submit New Messages: All logged-in users can write and submit new messages.

Admin Privileges: Admins can delete messages.

Membership Management: Users can become members to unlock additional features.

# Implementation Details

Backend Server: Implemented with Node.js and Express, defining routes to handle user authentication, message submission, membership management, and admin actions.

Authentication: Passport.js is used for handling user authentication, including strategies for sign-up and log-in.

Database PostgreSQL: Stores users, messages, and their relationships, including user roles and membership statuses. Each message record contains an ID, content, author, timestamp, and a foreign key linking to the user.

Views EJS: Templates are used to render pages dynamically, including user dashboards, message lists, and admin panels.

Authorization Role-Based Access Control: Different user roles (member, admin) are managed within the application, restricting access to specific features based on the user’s role.

# Lessons Learned

Building this Members-Only Message Board provided valuable experience in full-stack development, particularly in implementing user authentication and role-based access control with Passport.js. It also reinforced the importance of managing user roles and permissions, and integrating a relational database like PostgreSQL for secure and structured data storage. This project highlighted the challenges and solutions in creating a secure, scalable web application with membership-based features.
