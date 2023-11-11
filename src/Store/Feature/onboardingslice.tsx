import { createSlice } from '@reduxjs/toolkit'
const initialStateValue = [
    { id: 1, imge: require('../../Main/4-.png'),  },
    { id: 2, imge: require('../../Main/5-.png'), },
    { id: 3, imge: require('../../Main/6-.png'), },

]
export const onboardingslice = createSlice({
    name: 'Onboarding',
    initialState:{value:initialStateValue},
    reducers:{
        onboardingaction:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const OnboardingReducer = onboardingslice.reducer
export const {onboardingaction}=onboardingslice.actions