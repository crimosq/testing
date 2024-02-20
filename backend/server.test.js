const request = require('supertest');
const app = require('./server'); // Adjust the path as necessary



describe('POST /QuizPage', () => {
    it('should generate a quiz successfully', async () => {
      const response = await request(app)
        .post('/QuizPage')
        .send({
          language: 'JavaScript',
          difficulty: 'novice',
          number: 5,
          type: 'normal'
        });
      expect(response.statusCode).toBe(200);
      expect(response.text).toContain('1.'); // Assuming your quiz starts with "1. "
    });
  });
  