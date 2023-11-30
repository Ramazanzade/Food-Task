import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { foodReducer } from "./Feature/fooddataSlice";
import { OnboardingReducer } from "./Feature/onboardingslice";
import  authReducer  from "./Feature/LoginRegister/loginregisterSlice";
import messageReducer from './Feature/LoginRegister/message'

  
const rootReducers = combineReducers({
    foodReducer,
    OnboardingReducer,
    authReducer,
    messageReducer


})

export const store = configureStore({
    reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;