import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = [
    {
        id:1,
        category:'Pizza',
        name:'Food name',
        price:29.12,
        isFavorite: false,
        isBasket:false,
        imge:require('../../Main/01.png')
    },
    {
        id:2,
        category:'Pizza',
        name:'Food name',
        price:29.12,
        isFavorite: false,
        isBasket:false,
        imge:require('../../Main/01.png')

    },
    {
        id:3,
        category:'Pizza',
        name:'Food name',
        price:26.12,
        isFavorite: false,
        isBasket:false,
        imge:require('../../Main/01.png')

    }
]


export const fooddataSlice=createSlice({
    name:'food',
    initialState: { value: initialStateValue },
    reducers:{
        foodaction: (state, action) => {
            state.value = action.payload
        },
        toggleFavorite: (state, action) => {
            const itemToUpdate = state.value.find((item) => item.id === action.payload);
            if (itemToUpdate) {
                itemToUpdate.isFavorite = !itemToUpdate.isFavorite;
            }
        },
        toggleBasket: (state, action) => {
            const itemToUpdate = state.value.find((item) => item.id === action.payload);
            if (itemToUpdate) {
                itemToUpdate.isBasket = !itemToUpdate.isBasket;
            }
        },
    }
})



export const foodReducer = fooddataSlice.reducer
export const { foodaction, toggleFavorite , toggleBasket} = fooddataSlice.actions