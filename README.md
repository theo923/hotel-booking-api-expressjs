# Hotel Booking API ExpressJS

| Language  | NodeJS          |
|-----------|-----------------|
| Framework | ExpressJS       |
| Storage   | MongoDB         |
| Test      | Jest, Supertest |

### How to run the app
```
npm install
npm run start
```

### How to run test
```
npm run test
```

### Running solution
POST request
```
POST: https://hotel-booking-api-expressjs.onrender.com/registerBooking
data: {
    "email": "postmanexample@gmail.com",
    "firstName": "post",
    "lastName": "man",
    "noOfPeople": 3,
    "checkIn": "2022-11-30T03:10:34.256Z",
    "checkOut": "2022-11-30T03:10:34.256Z"
}
response: {
    "status": 200,
    "data": {
        "Unique Reservation ID": "6389036dcadf3f7b42bcfb84",
        "Guidelines on retrieve booking": "If you wish to retrieve the booking information, please access /getBooking/6389036dcadf3f7b42bcfb84",
        "Guidelines on cancel booking": "If you wish to cancel the booking, please access /removeBooking/6389036dcadf3f7b42bcfb84"
    }
}
```

GET request
```
GET: https://hotel-booking-api-expressjs.onrender.com/getBooking/6389036dcadf3f7b42bcfb84
response: {
    "status": 200,
    "data": {
        "_id": "6389036dcadf3f7b42bcfb84",
        "email": "postmanexample@gmail.com",
        "firstName": "post",
        "lastName": "man",
        "noOfPeople": 3,
        "checkIn": "2022-11-30T03:10:34.256Z",
        "checkOut": "2022-11-30T03:10:34.256Z",
        "createdAt": "2022-12-01T19:41:33.126Z",
        "updatedAt": "2022-12-01T19:41:33.126Z",
        "__v": 0
    }
}
```

DELETE request
```
DELETE: https://hotel-booking-api-expressjs.onrender.com/removeBooking/6389036dcadf3f7b42bcfb84
response: {
    "status": 200,
    "message": "You have removed the booking successfully"
}
```

### How tests cover the cases
should covered most of the valid and invalid requests for every endpoints
including data, status codes and messages

### Test Coverage Report
File                                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------------------------------|---------|----------|---------|---------|-------------------
All files                               |   94.94 |    78.57 |   81.81 |   95.65 | N/A                     
 hotel-booking-api-expressjs            |   82.14 |       50 |   33.33 |   85.18 | N/A                  
  server.js                             |   82.14 |       50 |   33.33 |   85.18 | 32-37 (miss if NODE_ENV == "test")           
 hotel-booking-api-expressjs/constants  |     100 |      100 |     100 |     100 | N/A                     
  BOOKING.js                            |     100 |      100 |     100 |     100 | N/A                     
 hotel-booking-api-expressjs/controller |     100 |      100 |     100 |     100 | N/A                     
  getBooking.js                         |     100 |      100 |     100 |     100 | N/A   
  registerBooking.js                    |     100 |      100 |     100 |     100 | N/A                     
  removeBooking.js                      |     100 |      100 |     100 |     100 | N/A   
 hotel-booking-api-expressjs/messages   |     100 |      100 |     100 |     100 | N/A   
  errors.js                             |     100 |      100 |     100 |     100 | N/A   
  guidelines.js                         |     100 |      100 |     100 |     100 | N/A   
  success.js                            |     100 |      100 |     100 |     100 | N/A   
 hotel-booking-api-expressjs/models     |     100 |      100 |     100 |     100 | N/A   
  BookingSchema.js                      |     100 |      100 |     100 |     100 | N/A   
 hotel-booking-api-expressjs/tests      |     100 |      100 |     100 |     100 | N/A   
  TESTING_CONSTANT.js                   |     100 |      100 |     100 |     100 | N/A   
 hotel-booking-api-expressjs/utils      |     100 |      100 |     100 |     100 | N/A   
  validBookings.js                      |     100 |      100 |     100 |     100 | N/A   
