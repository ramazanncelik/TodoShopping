"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const body_parser_1 = __importDefault(require("body-parser"));
const shoppingController_1 = require("./controllers/shoppingController");
const app = (0, express_1.default)();
app.use(cors());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
const port = 9999;
app.get('/api/getShoppingList', shoppingController_1.findAll);
app.post('/api/addShoppingItem', shoppingController_1.create);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
