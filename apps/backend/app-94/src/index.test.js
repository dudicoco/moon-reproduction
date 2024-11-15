const request = require("supertest");
const express = require("express");

// Create an instance of the Express app for testing
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

// Write a test for the root route
describe("GET /", () => {
  it("should respond with Hello World!", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello World!");
  });
});
