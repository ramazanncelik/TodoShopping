import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    shoppingList: [],
}

const shopping = createSlice({
    name: 'shopping',
    initialState,
    reducers: {
        setShoppingList: (state, action) => {
            state.shoppingList = action.payload
        }
    }
});

export const { setShoppingList } = shopping.actions
export default shopping.reducer;