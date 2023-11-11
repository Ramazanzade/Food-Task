import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { foodReducer } from "./Feature/fooddataSlice";
import { OnboardingReducer } from "./Feature/onboardingslice";
import { LoginRegisterreducer } from "./Feature/LoginRegister/loginregisterSlice";


  
const rootReducers = combineReducers({
    foodReducer,
    OnboardingReducer,
    LoginRegisterreducer

})

export const store = configureStore({
    reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;