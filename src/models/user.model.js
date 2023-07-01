import { DataTypes, Deferrable } from "sequelize";
import { sequelize } from "../utils/db.utils.js";

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
        model: "Task",
        key: "identifier",
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
      },
    },
  },
  {
    tableName: "users",
  }
);

sequelize.sync().then(() => {
  console.log(' User table created successfully.');
}).catch((error) => {
  console.error('Error creating table:', error.message);
});

export default User;