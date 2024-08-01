require('dotenv').config();

const commonOptions = {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    ...commonOptions,
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    ...commonOptions,
  },
  production: {
    url: process.env.DATABASE_URL,
    ...commonOptions,
  },
};
