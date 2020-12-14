const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  
  it('Get route for / path', async() => {

    const response = await request(app)
      .get('/');

    expect(response.text).toEqual('Hi');
  });

  it('Post route for /echo path', async() => {

    const response = await request(app)
      .post('/echo')
      .send('Hello world');

    expect(response.text).toEqual('Hello world');
  });

  it('Get route for /red path', async() => {

    const response = await request(app)
      .get('/red');

    expect(response.text).toEqual('<h1>Red</h1>');
  });

  it('Get route for /green path', async() => {

    const response = await request(app)
      .get('/green');

    expect(response.text).toEqual('<h1>Green</h1>');
  });

  it('Get route for /blue path', async() => {

    const response = await request(app)
      .get('/blue');

    expect(response.text).toEqual('<h1>Blue</h1>');
  });


});
