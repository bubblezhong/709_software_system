const index = require('../routes/index');
const login = require('../routes/login');
const users = require('../routes/users');

const softwareInfo = require('../routes/softwareInfo');
// 基本信息
const basicCategory = require('../routes/basic/category');
const basicMudule = require('../routes/basic/module');
const basicSoftware = require('../routes/basic/software');
const basicUnit = require('../routes/basic/unit');
const basicUser = require('../routes/basic/user');
const basicRole = require('../routes/basic/role');
const basicCategoryVersion = require('../routes/basic/categroyVersion');

// 工作流
const softwareIn = require('../routes/workflows/softwareIn');
const workflow = require('../routes/workflows/action');


module.exports = (app) => {
  app.use('/', index);
  app.use('/software_info', softwareInfo);
  app.use('/users', users);
  app.use('/login', login);
  app.use('/api/basic-category/', basicCategory);
  app.use('/api/basic-software/', basicSoftware);
  app.use('/api/basic-module/', basicMudule);
  app.use('/api/basic-unit/', basicUnit);
  app.use('/api/basic-user/', basicUser);
  app.use('/api/basic-role/', basicRole);
  app.use('/api/category-version/', basicCategoryVersion);

  app.use('/api/software-in/', softwareIn);
  app.use('/api/workflow/', workflow);
};
