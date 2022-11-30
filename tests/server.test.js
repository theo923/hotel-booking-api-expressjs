const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../server");
const { ID_NAME } = require("../constants/BOOKING");
const { REMOVE_SUCCESS } = require("../messages/success");
const { CORRECT_REQUEST } = require("./TESTING_CONSTANT");

require("dotenv").config();

beforeEach(async () => {
    await mongoose.connect(process.env.DATABASE_URI);
  });

afterEach(async () => {
    await mongoose.connection.close();
});

describe("Test if server is running", () => {
    it("should return 200", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
    });
})

describe("Full Lifecycle", () => {
    let bookingId = ""
    it("should create correct id", async () => {
        const res = await request(app).post("/registerBooking").send(CORRECT_REQUEST);
        expect(res.statusCode).toBe(200);
        expect(res.body.data[ID_NAME]).not.toBe("");
        bookingId = res.body.data[ID_NAME]
    });
    
    it("should return correct booking", async () => {
        const res = await request(app).get(`/getBooking/${bookingId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.data._id).toBe(bookingId);
        expect(res.body.data.email).toBe(CORRECT_REQUEST.email);
        expect(res.body.data.firstName).toBe(CORRECT_REQUEST.firstName);
        expect(res.body.data.lastName).toBe(CORRECT_REQUEST.lastName);
        expect(res.body.data.noOfPeople).toBe(CORRECT_REQUEST.noOfPeople);
        expect(res.body.data.checkIn).toBe(CORRECT_REQUEST.checkIn);
        expect(res.body.data.checkOut).toBe(CORRECT_REQUEST.checkOut);
    });

    it("should remove booking", async () => {
        const res = await request(app).delete(`/removeBooking/${bookingId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe(REMOVE_SUCCESS);
    });
});