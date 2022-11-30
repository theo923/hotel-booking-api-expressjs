const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let bookingSchema = new Schema(
  {
    email: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    noOfPeople: {
      type: Number,
    },
    checkIn: {
      type: Date
    },
    checkOut: {
      type: Date
    }
  },
  { timestamps: true }
);

let Booking = mongoose.model("Bookings", bookingSchema);

module.exports = Booking;