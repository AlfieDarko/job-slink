const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const { graphqlExpress } = require('apollo-server-express');
const expressPlayground = require('graphql-playground-middleware-express')
  .default;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const schema = require('./api/schema/schema');
const mongoose = require('mongoose');
require('dotenv').load();

const app = express();

mongoose.connect(process.env.MONGO_DB_KEY);
mongoose.connection.once('open', () => {
  console.log('connected to the database');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'application/graphql' }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(
  '/graphql',
  graphqlExpress({
    schema: schema,
    graphiql: false,
  }),
);

app.get(
  '/playground',
  express.json(),
  expressPlayground({ endpoint: '/graphql' }),
  () => {},
);

app.use(logger('dev'));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  }),
);

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
