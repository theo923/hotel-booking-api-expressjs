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
File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------------|---------|----------|---------|---------|-------------------
All files             |   94.73 |    78.57 |   81.81 |   95.45 | N/A                  
 Bell-task            |   83.33 |       50 |   33.33 |    86.2 | N/A                 
  server.js           |   83.33 |       50 |   33.33 |    86.2 | 32-37 (miss if NODE_ENV == "test")            
 Bell-task/constants  |     100 |      100 |     100 |     100 | N/A              
  BOOKING.js          |     100 |      100 |     100 |     100 | N/A                  
 Bell-task/controller |     100 |      100 |     100 |     100 | N/A
  getBooking.js       |     100 |      100 |     100 |     100 | N/A
  registerBooking.js  |     100 |      100 |     100 |     100 | N/A
  removeBooking.js    |     100 |      100 |     100 |     100 | N/A
 Bell-task/messages   |     100 |      100 |     100 |     100 | N/A
  errors.js           |     100 |      100 |     100 |     100 | N/A
  success.js          |     100 |      100 |     100 |     100 | N/A
 Bell-task/models     |     100 |      100 |     100 |     100 | N/A
  BookingSchema.js    |     100 |      100 |     100 |     100 | N/A
 Bell-task/tests      |     100 |      100 |     100 |     100 | N/A
  TESTING_CONSTANT.js |     100 |      100 |     100 |     100 | N/A
 Bell-task/utils      |     100 |      100 |     100 |     100 | N/A
  validBookings.js    |     100 |      100 |     100 |     100 | N/A
