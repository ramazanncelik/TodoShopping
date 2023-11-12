"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteShoppingItem = exports.update = exports.create = exports.findAll = void 0;
const shoppingList_1 = require("../db/shoppingList");
const findAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json({ success: true, shoppingList: shoppingList_1.shoppingList });
});
exports.findAll = findAll;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const newProduct = {
        id: shoppingList_1.shoppingList.length + 1,
        description: body.description,
        isCompleted: false
    };
    yield shoppingList_1.shoppingList.push(newProduct);
    return res.status(200).json({ success: true });
});
exports.create = create;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const updatedShoppingList = shoppingList_1.shoppingList.map(shoppingItem => {
        if (shoppingItem.id === id) {
            return Object.assign(Object.assign({}, shoppingItem), { isCompleted: !shoppingItem.isCompleted });
        }
        return shoppingItem;
    });
    if (updatedShoppingList) {
        (0, shoppingList_1.updateShoppingList)(updatedShoppingList);
        return res.status(200).json({ success: true });
    }
    else {
        res.status(200).json({ success: false });
    }
});
exports.update = update;
const deleteShoppingItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const itemId = parseInt(req.params.id);
    const index = shoppingList_1.shoppingList.findIndex(item => item.id === itemId);
    if (index !== -1) {
        shoppingList_1.shoppingList.splice(index, 1);
        res.status(200).json({ success: true });
    }
    else {
        res.status(404).json({ success: false });
    }
});
exports.deleteShoppingItem = deleteShoppingItem;
