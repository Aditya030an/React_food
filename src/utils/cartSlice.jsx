import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        item:[]
    },
    reducers:{
        addItem:(state , action)=>{
            state.item.push(action.payload);
        },
        clearCart:(state , action)=>{
            state= [];
        },
        removeItem:(state , action)=>{
            state.item.pop(action.payload);
        }
    }
});

export const {addItem , clearCart , removeItem}=cartSlice.actions;

export default cartSlice.reducer;

/**
 * ehind the seen of export
 * cartSlice:{
 *      action:{
 *          addItem,
 *          removeItem,
 *          clearCart
 *      },
 *      reducer : reducers,
 * }
 */