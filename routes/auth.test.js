const request = require('supertest');
const app = require('../app'); 
const { User } = require('../models/User'); // Import your User model


describe('POST /login', () => {
    it('should log in the user and return an auth token', async () => {
      const existingUser = {
        email: 'admin@gmail.com', 
        password: 'admin@123',
      };
  
      const response = await request(app)
        .post('/api/auth/login')
        .send(existingUser);
  
      expect(response.status).toBe(200);
    });
  
    it('should return error for invalid login credentials', async () => {
      const invalidCredentials = {
        email: 'test@example.com',
        password: 'wrongpassword',
      };
  
      const response = await request(app)
        .post('/api/auth/login')
        .send(invalidCredentials);
  
      expect(response.status).toBe(400);
    });
  });


  describe('POST /signup', () => {
    it('should create a new user and return an auth token', async () => {
      const newUser = {
        name: 'Test User',
        email: 'test@exampl.com',
        password: 'password123',
      };
  
      const response = await request(app)
        .post('/api/auth/signup')
        .send(newUser);
  
      expect(response.status).toBe(200);
    });
  
    it('should return error for invalid signup data', async () => {
      const invalidUser = {
        name: 'U', // Invalid name (less than 3 characters)
        email: 'invalidemail', // Invalid email format
        password: 'pass', // Invalid password (less than 5 characters)
      };
  
      const response = await request(app)
        .post('/api/auth/signup')
        .send(invalidUser);
  
      expect(response.status).toBe(400);
    });
  });