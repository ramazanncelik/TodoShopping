import Product from "../models/ShoppingItem";

let shoppingList: Product[] = [
    { id: 1, description: "2 adet ekmek alınacak", isCompleted: false },
    { id: 2, description: "1 paket süt alınacak", isCompleted: false }
];

const updateShoppingList = async (newList: Product[]) => {
    shoppingList = newList;
}

export { shoppingList, updateShoppingList };