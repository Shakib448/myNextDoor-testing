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
    await AddValue.remove();
    await stopDB();
  });

  it("has model exists", async () => {
    expect(AddValue).toBeDefined();
  });

  it("Create a new AddValue", async () => {
    const res = await request.post("/api/add-value").send({
      firstName: "Muktadir Ahamed",
      lastName: "Shakib",
      password: "123456",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.firstName).toBe("Muktadir Ahamed");
    expect(res.body.lastName).toBe("Shakib");
    expect(res.body.password).toBe("123456");
  });

  it("Get All Value", async () => {
    const res = await request.get("/api/add-value");

    res.body.map((dt: any) => {
      expect(dt.firstName).toBe("Muktadir Ahamed");
      expect(dt.lastName).toBe("Shakib");
      expect(dt.password).toBe("123456");
    });

    expect(res.body).toBeInstanceOf(Object);
    expect(res.body.length).toEqual(1);
  });

  it("Get value by id", async () => {
    const res = await request.post("/api/add-value").send({
      firstName: "Muktadir Ahamed",
      lastName: "Shakib",
      password: "123456",
    });

    const valueById = await request.get(`/api/add-value/${res.body._id}`);

    expect(valueById.body.firstName).toBe("Muktadir Ahamed");
    expect(valueById.body.lastName).toBe("Shakib");
    expect(valueById.body.password).toBe("123456");
    expect(valueById.body).toBeInstanceOf(Object);
  });
  it("Update value by id", async () => {
    const res = await request.post("/api/add-value").send({
      firstName: "Muktadir Ahamed",
      lastName: "Shakib",
      password: "123456",
    });

    const updateById = await request
      .put(`/api/add-value/${res.body._id}`)
      .send({
        firstName: "Muktadir",
        lastName: "Ahamed Shakib",
        password: "Muktadir",
        address: "Savar",
        zipCode: "1216",
      });
    expect(updateById.body.message).toBe("Details updated successfully");
  });

  it("Delete value by id", async () => {
    const res = await request.post("/api/add-value").send({
      firstName: "Muktadir Ahamed",
      lastName: "Shakib",
      password: "123456",
    });

    const deleteById = await request.delete(
      `/api/add-value/delete/${res.body._id}`
    );
    expect(deleteById.body.message).toBe("Value removed successfully");
  });
});
