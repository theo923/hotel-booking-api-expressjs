const { MAX_PEOPLE, MAX_BOOKING_DAYS } = require("../constants/BOOKING");

const checkNoOfPeople = (noOfPeople) => noOfPeople > MAX_PEOPLE
const checkBookingDate = (In, Out) => {
    const checkIn = new Date(In)
    const checkOut = new Date(Out)

    return ((checkOut.getTime() - checkIn.getTime()) / (1000 * 3600 * 24)) > MAX_BOOKING_DAYS
}

module.exports = {
    checkNoOfPeople: checkNoOfPeople,
    checkBookingDate: checkBookingDate
}