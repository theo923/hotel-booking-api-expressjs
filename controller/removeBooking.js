const { NO_BOOKING_ERROR } = require("../messages/errors");
const { REMOVE_SUCCESS } = require("../messages/success");
const Booking = require("../models/BookingSchema");

const handleRemoveBooking = () => async (req, res) => {
  try {
    let booking = await Booking.findByIdAndRemove(req.params.bookingId);
    if (booking) {
      res.status(200).json({
        status: 200,
        message: REMOVE_SUCCESS,
      });
    } else throw { message: NO_BOOKING_ERROR }
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
};

module.exports = {
  handleRemoveBooking: handleRemoveBooking
}