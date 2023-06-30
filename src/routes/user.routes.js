import express from 'express';
import { getAllUsers, createNewUser } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.route("/").get(getAllUsers).post(createNewUser);

export default userRouter;