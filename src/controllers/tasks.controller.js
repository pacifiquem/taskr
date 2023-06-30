import User from "../models/user.model.js";
import { HTTP_STATUS_CODES } from "../enums/httpStatuses.enum.js";

export const getAllTasks = async (req, res, next) => {
    try {

        let tasks = User.findAll();
        res.status(HTTP_STATUS_CODES.OK).json({
            success: true,
            data: tasks
        });

    } catch (error) {
        next(error);
    }
}

export const createNewTask = async (req, res, next) => {
    try {
        res.status(HTTP_STATUS_CODES.CREATED).json({
            success: true,
            data: req.body
        });
    } catch (error) {
        next(error)
    }
}