# CHALLENGE_TASK Terribly Tiny Tales
**`Avinash Kumar 11804771`**<br>

Hosted on Heroku [https://avinash11804771.herokuapp.com/](https://avinash11804771.herokuapp.com/)
<br>This a implementation of API
`https://terriblytinytales.com/testapi?rollnumber=123`
<hr>
<br>Task Performed:<br>
1. Get comma seperated roll Number input from frontend.<br>
2. Get result [Pass/Fail] from the API.<br>
3. Output the result to the frontend.

**Implementation**
1. Created a `NodeJS` app to service request from frontend.
2. Created endpoint POST `/getResult` to get results from the API and returned the result to frontend.

**Node Package Used**
```
       "body-parser": "^1.19.0",
       "dotenv": "^8.2.0",
       "express": "^4.17.1",
       "node-fetch": "^2.6.1",
       "nodemon": "^2.0.7"
```

To run use: ```npm run watch``` OR ```nodemon index.js``` OR ```node index.js```

