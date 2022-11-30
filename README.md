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
