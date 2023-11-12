import { Request, Response } from "express";
import shoppingList from '../db/shoppingList'
import ShoppingItem from "../models/ShoppingItem";

const findAll = async (req: Request, res: Response): Promise<any> => {
    return res.status(200).json({ success: true, shoppingList: shoppingList });
}

const create = async (req: Request, res: Response): Promise<any> => {
    const body = req.body;
    const newProduct: ShoppingItem = {
        id: shoppingList.length + 1,
        description: body.description,
        isCompleted: false
    };
    await shoppingList.push(newProduct);
    return res.status(200).json({ success: true });
}

const update = async (req: Request, res: Response): Promise<any> => {
    return res.status(200).json({ success: true, shoppingList: shoppingList });
}

export { findAll, create, update };