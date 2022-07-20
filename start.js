const express = require('express');
const { resolve } = require('path');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.PORT;

app.use(cors())
app.use('/',
    express.static(
        resolve(
            __dirname,
            './dist'
        )
    )
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})