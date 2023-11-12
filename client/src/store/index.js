import { configureStore } from '@reduxjs/toolkit'
import shopping from './shopping'

const store = configureStore({
    reducer: {
        shopping
    }
})

export default store;