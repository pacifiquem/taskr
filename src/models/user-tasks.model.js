import Task from "./task.model.js";
import User from "./user.model.js";
import { sequelize } from "../utils/db.utils.js";

const UserTask = sequelize.define(
    "UserTask",
    {},
    {
      tableName: "user_tasks",
    }
);
  
User.belongsToMany(Task, { through: UserTask });
Task.belongsToMany(User, { through: UserTask });