const dotenv = require('dotenv');
const express = require('express');
const app = express();
dotenv.config();

require('./startup/db')();
require('./startup/routes')(app);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
