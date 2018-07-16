import { IController } from "./interface";
import { crud } from "../db/crud";
import { NextFunction, Request, Response } from "express";
import { userModel } from "../models/user";

export let login: IController =  async function(req: Request, res: Response, next: NextFunction) {
    // res.send("hi");
    res.status(500).json('custom error message');
    // return await crud.createRecord$(userModel, req.body);
};
export let signup: IController =  async function(req: Request, res: Response, next: NextFunction) {
    return await crud.createRecord$(userModel, req.body);
};

