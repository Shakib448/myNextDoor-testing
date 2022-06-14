import supertest from "supertest";
import { connectDB, stopDB } from "@config/db";
import AddValue from "@models/AddValue.model";
import app from "@utils/server";

const request = supertest(app);

describe("Testing api of AddValue", () => {
  beforeAll(async () => {
    await connectDB();
    await AddValue.remove();
  });
  afterAll(async () => {
    await stopDB();
  });

  it("has model exists", async () => {
    expect(AddValue).toBeDefined();
  });
});
