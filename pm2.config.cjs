/**
 * Define how the web app process is managed.
 * 
 * @type {import('pm2').StartOptions}
 */
const webApp = {
  name: 'railway-webapp-master',
  script: 'server.js',
  instances: 1,
  exp_backoff_restart_delay: 100,
  env: {
    'PORT': 3000,
    'NODE_ENV': 'development'
  },
  env_production: {
    'PORT': 80,
    'NODE_ENV': 'production'
  }
};

// eslint-disable-next-line no-undef
module.exports = {
  apps: [webApp]
};
