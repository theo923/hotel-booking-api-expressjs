const { validNoOfPeople, validBookingDate } = require("../utils/validBookings");
const { ID_NAME } = require("../constants/BOOKING");
const { NO_OF_PEOPLE_ERROR, DATE_ERROR } = require("../messages/errors");
const Booking = require("../models/BookingSchema");

const handleRegister = () => async (req, res) => {
    try {
      const { noOfPeople, checkIn, checkOut } = req.body

      if (validNoOfPeople(noOfPeople)) throw { message: NO_OF_PEOPLE_ERROR }
      if (validBookingDate(checkIn, checkOut)) throw { message: DATE_ERROR }

      let booking = new Booking(req.body);
      booking = await booking.save();
      res.status(200).json({
        status: 200,
        data: {
          [ID_NAME]: booking.id
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 400,
        message: err.message,
      });
    }
};

module.exports = {
    handleRegister: handleRegister
}