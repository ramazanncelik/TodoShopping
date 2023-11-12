import React, { createContext, useContext, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios'
import { serverUrl } from '../utils/utils';
import store from '../store/index'
import { setShoppingList } from '../store/shopping';

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const { shoppingList } = useSelector(state => state.shopping)

    const getShoppingList = async () => {
        const result = await axios.get(`${serverUrl}/getShoppingList`);
        if (result.data.success) {
            store.dispatch(setShoppingList(result.data.shoppingList));
        } else {
            store.dispatch(setShoppingList([]));
        }
    }

    useEffect(() => {
        getShoppingList();
    }, []);

    const data = useMemo(() => ({
        shoppingList,
        getShoppingList
    }), [shoppingList]);

    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    );
}

const useAppContext = () => {
    const context = useContext(AppContext);
    return context;
}

export { AppProvider, AppContext, useAppContext };