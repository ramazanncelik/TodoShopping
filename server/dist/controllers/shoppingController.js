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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.create = exports.findAll = void 0;
const shoppingList_1 = __importDefault(require("../db/shoppingList"));
const findAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json({ success: true, shoppingList: shoppingList_1.default });
});
exports.findAll = findAll;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const newProduct = {
        id: shoppingList_1.default.length + 1,
        description: body.description,
        isCompleted: false
    };
    yield shoppingList_1.default.push(newProduct);
    return res.status(200).json({ success: true });
});
exports.create = create;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json({ success: true, shoppingList: shoppingList_1.default });
});
exports.update = update;
