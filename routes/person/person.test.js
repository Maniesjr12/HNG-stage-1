const request = require("supertest");
const { mongooseConnect, mongooseDisconnect } = require("../../db/mongoose");
const app = require("../../app"); // Replace with the correct path to your app.js or server.js

describe("Person API", () => {
  beforeAll(async () => {
    mongooseConnect();
  }, 10000);
  afterAll(async () => {
    mongooseDisconnect();
  }, 20000);
  let personId; // Store the person ID created during testing

  // Test creating a new person
  it("should create a new person", async () => {
    const res = await request(app).post("/api/persons").send({
      name: "Mark Essien",
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toEqual("Mark Essien");

    // Store the person ID for use in other tests
    personId = res.body._id;
  });

  // Test retrieving details of a person
  it("should retrieve details of a person", async () => {
    const res = await request(app).get(`/api/persons/${personId}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual("Mark Essien");
  });

  // Test updating details of an existing person
  it("should update details of an existing person", async () => {
    const res = await request(app).put(`/api/persons/${personId}`).send({
      name: "Mark Essien",
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual("Mark Essien");
  });

  // Test deleting a person
  it("should delete a person", async () => {
    const res = await request(app).delete(`/api/persons/${personId}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual("Person deleted successfully");
  });
});
