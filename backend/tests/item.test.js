const request = require("supertest");

const app = require("../src/app");

const database = require("../database");
afterAll(() => {
  database.end();
});

describe ( "GET /items", () => {
  it ("should return items", async () => {
    const response = await request(app).get("/items");

    expect(response.header["content-type"]).toMatch(/json/);
    
    expect(response.status).toEqual(200);
  });
});

