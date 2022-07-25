module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: process.env.DATABASE_HOST,
        srv: process.env.DATABASE_SRV,
        database: process.env.DATABASE_NAME,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
      },
      options: {
        ssl: process.env.DATABASE_SSL,
      },
    },
  },
});
