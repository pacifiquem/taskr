import { DataTypes, Deferrable } from "sequelize";
import dbConnection from "../utils/db.utils.js";

const sequelize = dbConnection();

const User = sequelize.define("User",{
    
    identifier: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    tasks: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      references: {
        model: "Task", // Update with the name of your Task model
        key: "identifier",
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
      },
    },
  },
  {
    tableName: "users",
  }
);

export default User;