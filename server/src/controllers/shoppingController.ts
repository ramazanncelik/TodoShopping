import { Request, Response } from "express";
import { shoppingList, updateShoppingList } from '../db/shoppingList'
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
    const id = parseInt(req.params.id);
    const updatedShoppingList = shoppingList.map(shoppingItem => {
        if (shoppingItem.id === id) {
            return { ...shoppingItem, isCompleted: !shoppingItem.isCompleted };
        }
        return shoppingItem;
    });
    if (updatedShoppingList) {
        updateShoppingList(updatedShoppingList)
        return res.status(200).json({ success: true });
    } else {
        res.status(200).json({ success: false })
    }

}

const deleteShoppingItem = async (req: Request, res: Response): Promise<any> => {
    const itemId = parseInt(req.params.id);
    const index = shoppingList.findIndex(item => item.id === itemId);

    if (index !== -1) {
        shoppingList.splice(index, 1);
        res.status(200).json({ success: true });
    } else {
        res.status(404).json({ success: false });
    }
}

export { findAll, create, update, deleteShoppingItem };