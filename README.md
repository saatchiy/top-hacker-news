# top-hacker-news

This web application lists 30 top stories and top 10 commenters on these stories, from HN API.

To select top 10 commenters it loads all of the comments of each 30 story and counts the number of comments of each commenter.

Since some stories have a huge number of comments, the total number of comments on these 30 stories might exceed 2000. This means more than 2000 REST API calls. This is why loading of the top 10 commenters is slow.

## Instructions

To build and run the application you need **Node.js**.
After installing Node.js follow the instructions to run the application.

To install the necessary packages run the following command:

    npm install

To run the application:

    npm run start

