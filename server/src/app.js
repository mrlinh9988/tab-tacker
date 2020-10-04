const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.post('/register', (req, res) => {
  res.send({
    hello: `Hello ${req.body.email} - ${req.body.password}`,
  });
});

app.listen(process.env.PORT || 3000);
