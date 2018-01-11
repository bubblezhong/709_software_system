const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
// const config = require('./config/config');
const routes = require('./routes/index');
const connection = require('express-myconnection'); // mysql 服务连接器
const mysql = require('mysql');                     // mysql 模块
const cors = require('cors');                       // 跨域访问
const dbconfig = require('./config/database');
const SoftwareInfoTree = require('./routes/SoftwareInfo/Tree');
const SoftwareInfoModule = require('./routes/SoftwareInfo/Module');
const SoftwareInfoQuery = require('./routes/SoftwareInfo/Query');
const InventoryRegistrationInput = require('./routes/InventoryRegistration/Input');
const InventoryRegistrationOutput = require('./routes/InventoryRegistration/Output');
const InventoryRegistrationRetire = require('./routes/InventoryRegistration/Retire');
const SoftwarePlanPlan = require('./routes/SoftwarePlan/Plan');
const SystemSettingAuthority = require('./routes/SystemSetting/Authority');
const SystemSettingDictionary = require('./routes/SystemSetting/Dictionary');
const SystemSettingGroup = require('./routes/SystemSetting/Group');
const SystemSettingOrganization = require('./routes/SystemSetting/Organization');
const SystemSettingOrgAuthority = require('./routes/SystemSetting/OrgAuthority');
const SystemSettingOrgRole = require('./routes/SystemSetting/Role');
const SystemSettingOrgUser = require('./routes/SystemSetting/User');
const SoftwareDeploymentDeploymentRequest = require('./routes/SoftwareDeployment/DeploymentRequest');
const SoftwareDeploymentScheme = require('./routes/SoftwareDeployment/Scheme');
const SoftwareDeploymentAssignTasks = require('./routes/SoftwareDeployment/AssignTasks');
const UpgradePerfect = require('./routes/UpgradePerfect/index');
const api = require('./routes/api');

// 初始化数据库连接
// mongoose.connect(config.mongodb);


// 实例化 espress
const app = express();


/**
 * 使用内存保存 session
 * @type {Object}
 */
// const sessionOption = {
//   secret: config.secretSession,
//   cookie: { maxAge: 60000 * 60 * 24 * 30 },
//   name: 'express.sid',
//   resave: false,
//   saveUninitialized: true,
//   store: new MongoStore({ mongooseConnection: mongoose.connection }),
// };

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 开启跨域访问
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', '*');
  // Request headers you wish to allow
  // res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});


app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(session(sessionOption));


app.use(
  connection(mysql, {
    host: dbconfig.connection.host,
    user: dbconfig.connection.user,
    password: dbconfig.connection.password,
    port: dbconfig.connection.port,
    database: dbconfig.database,
    debug: false, // true for debug logger.
  }, 'request')
);

// 加载自定义路由
app.use('/', routes);
app.use('/api/v0.1', SoftwareInfoTree);
app.use('/api/v0.1', SoftwareInfoModule);
app.use('/api/v0.1', SoftwareInfoQuery);
app.use('/api/v0.1', InventoryRegistrationInput);
app.use('/api/v0.1', InventoryRegistrationOutput);
app.use('/api/v0.1', InventoryRegistrationRetire);
app.use('/api/v0.1', api);
app.use('/api/v0.1/SoftwarePlan', cors(), SoftwarePlanPlan);
app.use('/api/v0.1/SystemSetting', cors(), SystemSettingAuthority);
app.use('/api/v0.1/SystemSetting', cors(), SystemSettingDictionary);
app.use('/api/v0.1/SystemSetting', cors(), SystemSettingGroup);
app.use('/api/v0.1/SystemSetting', cors(), SystemSettingOrganization);
app.use('/api/v0.1/SystemSetting', cors(), SystemSettingOrgAuthority);
app.use('/api/v0.1/SystemSetting', cors(), SystemSettingOrgRole);
app.use('/api/v0.1/SystemSetting', cors(), SystemSettingOrgUser);
app.use('/api/v0.1/SoftwareDeployment', cors(), SoftwareDeploymentDeploymentRequest);
app.use('/api/v0.1/SoftwareDeployment', cors(), SoftwareDeploymentScheme);
app.use('/api/v0.1/SoftwareDeployment', cors(), SoftwareDeploymentAssignTasks);
app.use('/api/v0.1/upgrade-perfect', cors(), UpgradePerfect);

// catch 404 and forward to error handler
app.use((req, res) => {
  // const err = new Error('Not Found');
  // err.status = 404;
  // next(err);
  res.render('index');
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
});


module.exports = app;
