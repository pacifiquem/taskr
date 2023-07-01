import { Sequelize, DataTypes} from "sequelize";
import { sequelize } from "../utils/db.utils.js";

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

sequelize.sync().then(() => {
  console.log('Task table created successfully.');
}).catch((error) => {
  console.error('Error creating table:', error.message);
});

export default Task;