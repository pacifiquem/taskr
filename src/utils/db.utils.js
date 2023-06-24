import { Sequelize } from "sequelize";

const dbConnection = async () => {
  // CONNECTION CONFIGURATION
  const config = {
    host: "localhost",
    port: "3306",
    dialect: "mysql",
  };

  const DB_USER = process.env.NODE_ENV == "development" ? process.env.DEV_DB_USER : process.env.PROD_DB_USER;
  const DB_NAME = process.env.NODE_ENV == "development" ? process.env.DEV_DB_NAME : process.env.PROD_DB_NAME;
  const DB_PASS = process.env.NODE_ENV == "development" ? process.env.DEV_DB_PASS : process.env.PROD_DB_PASS;
  

  const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, config);

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default dbConnection