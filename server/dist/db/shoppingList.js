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
exports.updateShoppingList = exports.shoppingList = void 0;
let shoppingList = [
    { id: 1, description: "2 adet ekmek alınacak", isCompleted: false },
    { id: 2, description: "1 paket süt alınacak", isCompleted: false }
];
exports.shoppingList = shoppingList;
const updateShoppingList = (newList) => __awaiter(void 0, void 0, void 0, function* () {
    exports.shoppingList = shoppingList = newList;
});
exports.updateShoppingList = updateShoppingList;
