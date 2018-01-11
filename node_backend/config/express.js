const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const timeout = require('connect-timeout');
const express = require('express');
const passport = require('passport');
const session = require('express-session');
// session
const session_secret = require('./system').session_secret;

module.exports = (app) => {
  // view engine setup
  app.set('views', path.join(__dirname, '..', 'views'));
  app.set('view engine', 'ejs');

  // uncomment after placing your favicon in /public
  // app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, '..', 'public')));
  // --    passport 设置
  app.use(cookieParser(session_secret));
  app.use(session({
    secret: session_secret,
    resave: true,
    saveUninitialized: true,
  })); // session secret
  app.use((req, res, next) => {
    require('./passport')(req, passport); // passport 配置文件
    next()
  });
  app.use(passport.initialize());         // 使用 initialize 中间件
  app.use(passport.session());            // 使用 session 中间件

  app.use(timeout('5s'));
};
