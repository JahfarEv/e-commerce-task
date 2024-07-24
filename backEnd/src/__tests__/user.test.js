const request = require("supertest");
const app = require("../app");

jest.mock("../models/userSchema");
jest.mock("bcrypt");
jest.mock("http-errors");

describe("loginUser", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return status code 400 if email is missing", async () => {
    const res = await request(app)
      .post("/api/users/login")
      .send({ password: "password123" });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ status: "error", message: "Required field" });
  });
});

it("should return status code 400 if email is missing", async () => {
  const res = await request(app)
    .post("/api/users/login")
    .send({ password: "password123" });

  expect(res.statusCode).toEqual(400);
  expect(res.body).toEqual({ status: "error", message: "Required field" });
});
