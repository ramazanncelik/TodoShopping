import express, { NextFunction, Request, Response } from 'express';
const cors = require('cors')
import bodyParser from 'body-parser';
import { findAll,create } from './controllers/shoppingController'

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 9999;

app.get('/api/getShoppingList', findAll);
app.post('/api/addShoppingItem', create);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
