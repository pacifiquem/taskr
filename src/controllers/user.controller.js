import User from "../models/user.model.js";
import { HTTP_STATUS_CODES } from "../enums/httpStatuses.enum.js";

export const getAllUsers = async (req, res, next) => {
    try {

        let users = User.findAll();
        res.status(HTTP_STATUS_CODES.OK).json({
            success: true,
            data: users
        });

    } catch (error) {
        next(error);
    }
}

export const createNewUser = async (req, res, next) => {
    try {
        res.status(HTTP_STATUS_CODES.CREATED).json({
            success: true,
            data: req.body
        });
    } catch (error) {
        next(error)
    }
}