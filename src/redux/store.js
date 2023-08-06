import { configureStore } from '@reduxjs/toolkit'
import componentReducer from './features/components/componentSlice'

export const store = configureStore({
    reducer: {
        pc_components: componentReducer
    },
})