import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { foodReducer } from "./Feature/fooddataSlice";
import { OnboardingReducer } from "./Feature/onboardingslice";


  
const rootReducers = combineReducers({
    foodReducer,
    OnboardingReducer

})

export const store = configureStore({
    reducer: rootReducers,
});

