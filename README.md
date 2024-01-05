**Notes API**

This is a RESTful API for managing notes built using Express.js and MongoDB, bcrypt ,jwt security and express-rate-limiter with Jest and Supertest for testing.


**Framework and Database Choice**

**Framework - Express.js**

Reason: Express.js is a popular and lightweight Node.js framework for building web applications and APIs. Its middleware-based approach simplifies routing and handling HTTP requests.

**express-rate-limit**

Purpose: express-rate-limit is used to limit the number of requests made to the API within a specified time frame. This helps prevent abuse, brute force attacks, and improves security by limiting the rate of incoming requests.

**Database - MongoDB**

Reason: MongoDB was chosen for its flexibility and scalability. Its document-oriented structure aligns well with storing note data, and its JSON-like documents allow for easy manipulation and querying of data.


**Third-party Tools**

Testing - Jest and Supertest

Jest: Jest is a JavaScript testing framework known for its simplicity and speed. It provides built-in assertion functionalities and supports parallel test execution.

Supertest: Supertest is used for HTTP assertions during API testing. It works seamlessly with Jest, allowing for sending HTTP requests and making assertions on the responses.


**How to Run the Code**

**Prerequisites**

Node.js and npm installed on your machine

MongoDB instance running locally or remotely


**Setup**

**1 :- Clone the repository**

**2 :- import monogoDb data from step folder**

**3 :- Run npm i**

**4:- Create .env file and add JWT_SECRET = secretcode**

**5 :- Run nodemon app.js**

**Setup is complete here**


**Test**

**Change vlaues of email , password, nodeIdHere, userIdHere in notes.jest.js file**

**There might error come while runnig test, as it will trigger app.listen again and again so comment out that if error comes**

**Run npx jest**
