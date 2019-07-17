const config = {
  server: 'http://api.staging.saas.hand-china.com',
  projectType: 'choerodon',
  buildType: 'single',
  resourcesLevel: ['site', 'origanization', 'project', 'user'],
  
  //master: '@choerodon/master',
  //dashboard: {},

  master: './react/master',
  homePath: './react/home',
};

module.exports = config;
