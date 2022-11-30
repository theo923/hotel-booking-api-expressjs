const { NO_BOOKING_ERROR } = require("../messages/errors");
const Booking = require("../models/BookingSchema");

const handleGetBooking = () => async (req, res) => {
  try {
    let booking = await Booking.findOne({
      _id: req.params.bookingId,
    });
    if (booking) {
      res.status(200).json({
        status: 200,
        data: booking,
      });
    }
    else throw { message: NO_BOOKING_ERROR }
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
};

module.exports = {
  handleGetBooking: handleGetBooking
}