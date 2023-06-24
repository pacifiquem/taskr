import { Sequelize, DataTypes } from "sequelize";
import dbConnection from "../utils/db.utils.js";

const sequelize = dbConnection();

const Task = sequelize.define("Task", {
  identifier: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  completedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  owner: {
    type: DataTypes.INTEGER,
    references: {
      model: "User",
      key: "identifier",
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }
}, {
  tableName: "tasks"
});

export default Task;