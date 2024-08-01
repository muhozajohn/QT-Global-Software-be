import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

const initializeDatabase = async () => {
  let sequelize;

  try {
    sequelize = new Sequelize(config.url, {
      logging: false,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
      dialect: 'postgres',
    });

    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    fs.readdirSync(__dirname)
      .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
      .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
      });

    Object.keys(db).forEach(modelName => {
      if (db[modelName].associate) {
        db[modelName].associate(db);
      }
    });

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;

    return db;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw error;
  }
};

initializeDatabase().catch(error => {
  console.error('Initialization Error:', error);
});

module.exports = db;
