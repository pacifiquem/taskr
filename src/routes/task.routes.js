import express from 'express';
import { getAllTasks, createNewTask } from '../controllers/tasks.controller.js';


const taskRouter = express.Router();

taskRouter.route("/").get(getAllTasks).post(createNewTask);

export default taskRouter;