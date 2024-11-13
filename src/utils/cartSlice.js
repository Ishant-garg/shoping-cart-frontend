import { createSlice } from "@reduxjs/toolkit";
 

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        item : [],
        totalCart : 10,
        
    },
    reducers:{
        addCart : (state ,action) => {
            state.item.push(action.payload)
        },
        emptyCart : (state)=>{
            state.item = []
        },
        removeCart:(state ,action) =>{
            const itemid = action.payload;
            state.item = state.item.filter((e)=> 
                e.id !== itemid ,
                 
            )
        },
        totalCart:(state) =>{
            let total = 0 ;
            (state.item).forEach((e)=>{
                total = total + e.price
            })
           state.totalCart = total
        }
    }

})

export const {addCart , totalCart ,removeCart} = cartSlice.actions;

export default cartSlice.reducer;