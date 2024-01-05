const request = require('supertest');
const app = require('../app'); 
// describe('Note Endpoints', () => {
//   let token; 
//   beforeAll(async () => {
//     const loginResponse = await request(app)
//       .post('/api/auth/login')
//       .send({ email: 'email', password: 'password' }); 
//       token = loginResponse.body.authtoken; 
//   });

//   it('should create a new note', async () => {
//     const newNoteData = {
//       title: 'New Note Title',
//       description: 'This is a new note description.',
//       tag: 'test Tag',
//     };

//     const response = await request(app)
//       .post('/api/notes')
//       .set('auth-token', `${token}`)
//       .send(newNoteData);

//     expect(response.status).toBe(200);
//   });


//   it('should get all notes for the authenticated user', async () => {
//     const res = await request(app)
//       .get('/api/notes')
//       .set('auth-token', `${token}`);
//     expect(res.statusCode).toEqual(200);
//   });

//   it('should update a note by ID', async () => {
//     const updatedNote = {
//       title: 'Updated Title',
//       description: 'Updated description.',
//       tag: 'updated',
//     };

//     const response = await request(app)
//       .put('/api/notes/noteIdHere') 
//       .set('auth-token', `${token}`)
//       .send(updatedNote);

//     expect(response.statusCode).toBe(200);
//   });
  
//   it('should get a note by ID', async () => {
//        const response = await request(app)
//       .get('/api/notes/noteIdHere') 
//       .set('auth-token', `${token}`);
  
//       expect(response.status).toBe(200);
//   });
  
//   it('should share a note with another user', async () => {
//     const userToShareWith = {
//         id: 'userIdHere',
//     };

//     const response = await request(app)
//         .post('/api/notes/noteIdHere/share') 
//         .set('auth-token', `${token}`)
//         .send(userToShareWith);

//     expect(response.status).toBe(200);
    
//     });

//     it('should get notes by tag for authenticated uesr', async () => {
//         const tagToSearch = 'test'; 
//         const response = await request(app)
//           .get('/api/search')
//           .set('auth-token' , `${token}`)
//           .query({ tag: tagToSearch })
    
//         expect(response.status).toBe(200);
//     });

//     it('should delete a note by ID', async () => {
//         const response = await request(app)
//         .delete('/api/notes/noteIdHere')
//         .set('auth-token', `${token}`);

//         expect(response.status).toBe(200);
//     });
    
// });




  
  
