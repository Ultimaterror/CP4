require("dotenv").config();
const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

const indexRouter = require('./src/routes/index');
const estatesRouter = require('./src/routes/estates');
// const authRouter = require('./src/routes/auth');

app.use('/', indexRouter);
app.use('/estates', estatesRouter);
// app.use('/authentication', authRouter);


const port = parseInt(process.env.APP_PORT ?? "5000", 10);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on ${port}`);
  }
});
