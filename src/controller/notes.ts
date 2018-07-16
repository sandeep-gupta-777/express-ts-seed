import { NextFunction, Request, Response } from "express";
import { crud } from "../db/crud";
import noteModel from "../models/note";
import { IController } from "./interface";
import { app_Error_Code_Enum } from "../constants/error-list";


export let createNote: IController = async function (req: Request, res: Response, next: NextFunction) {
    try {
        let response = await crud.createRecord$(noteModel, req.body);
        // res.send(response);
        res.locals.body = {name:"kkkkkiran"};
        res.locals.err_code = app_Error_Code_Enum.SUCCESS;
        next();
    }catch (e) {
        res.locals.err_code = app_Error_Code_Enum.CANNOT_ACCESS_DB;
        throw e;
    }

};
export let readNote: IController = async function (req: Request, res: Response, next: NextFunction) {
    return await crud.readRecord$(noteModel, req.body);
};

export let updateNote: IController = async function (req: Request, res: Response, next: NextFunction) {
    return await crud.createRecord$(noteModel, req.body);
};

export let deleteNote: IController = async function (req: Request, res: Response, next: NextFunction) {
    return await crud.createRecord$(noteModel, req.body);
};

