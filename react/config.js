const config = {
  server: 'http://api.staging.saas.hand-china.com',
  projectType: 'choerodon',
  buildType: 'single',
  resourcesLevel: ['site', 'origanization', 'project', 'user'],
  
  //master: '@choerodon/master',
  //dashboard: {},

  master: './react/src/app/demo/containers/master',
  homePath: './react/src/app/demo/containers/home',
};

module.exports = config;
