const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../server");
const { MAX_PEOPLE } = require("../constants/booking");
const { NO_OF_PEOPLE_ERROR, DATE_ERROR, NO_BOOKING_ERROR } = require("../messages/errors");
const { CORRECT_REQUEST } = require("./TESTING_CONSTANT");

require("dotenv").config();

beforeEach(async () => {
    await mongoose.connect(process.env.DATABASE_URI);
  });

afterEach(async () => {
    await mongoose.connection.close();
});

describe("Fail Attempt on POST", () => {
    it("should return error message for exceed max people", async () => {
        const res = await request(app).post("/registerBooking")
        .send({
            ...CORRECT_REQUEST,
            "noOfPeople": MAX_PEOPLE + 1
        });
        expect(res.statusCode).toBe(400);
        expect(res.body.message).toBe(NO_OF_PEOPLE_ERROR);
    });

    it("should return error message for exceed max booking days", async () => {
        const res = await request(app).post("/registerBooking")
        .send({
            ...CORRECT_REQUEST,
            "checkIn": "2022-11-20T03:10:34.256Z"
        });
        expect(res.statusCode).toBe(400);
        expect(res.body.message).toBe(DATE_ERROR);
    });
});

describe("Fail Attempt on GET", () => {
    it("should return error message for getting not existed id", async () => {
        const res = await request(app).get("/getBooking/02167b68758afbf415785525").send(CORRECT_REQUEST);
        expect(res.statusCode).toBe(400);
        expect(res.body.message).toBe(NO_BOOKING_ERROR);
    });
});

describe("Fail Attempt on DELETE", () => {
    it("should return error message for getting not existed id", async () => {
        const res = await request(app).delete("/removeBooking/02167b68758afbf415785525").send(CORRECT_REQUEST);
        expect(res.statusCode).toBe(400);
        expect(res.body.message).toBe(NO_BOOKING_ERROR);
    });
});