import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cartSlice';   //by default reducer export
const store = configureStore({
//it's an object , which contain slices
    reducer:{
        //name of slice : kis name se slice component bena h
        cart:cartSlice,
        //there will be multiple slicer
        //user : appUser,
    }
});

export default store;