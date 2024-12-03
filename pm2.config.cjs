/**
 * Define how the web app process is managed.
 *
 * @type {import('pm2').StartOptions}
 */
const webApp = {
  name: "web-app",
  script: "./node_modules/nuxt/bin/nuxt.mjs",
  args: "start",
  instances: 1,
  exp_backoff_restart_delay: 100,
  cwd: "/home/ec2-user/web-app",
  env: {
    PORT: 3000,
    NODE_ENV: "development",
  },
  env_production: {
    PORT: 3000,
    NODE_ENV: "production",
  },
  post_deploy: ["npm install", "npm run build"],
};

// eslint-disable-next-line no-undef
module.exports = {
  apps: [webApp],
};
