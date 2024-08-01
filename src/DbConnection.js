import { Sequelize } from "sequelize";

export const connection = async () => {
    const sequelize = new Sequelize(process.env.DATABASE_URL, {
        host: 'localhost',
        dialect: 'postgres'
    });

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}