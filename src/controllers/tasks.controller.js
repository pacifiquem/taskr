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

        let { title, description } = req.body
        let owner = new Date().getMilliseconds();

        if((title == undefined || title == null) || (description == undefined || description == null)) {
            res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({
                success: false,
                message: `title can't be null, description can't be null`
            });
            return;
        }

        let newTask = new User(title, description, owner);

        if(newTask) {
            res.status(HTTP_STATUS_CODES.CREATED).json({
                success: true,
                data: req.body
            });
        }

    } catch (error) {
        res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message
        });
    }
}