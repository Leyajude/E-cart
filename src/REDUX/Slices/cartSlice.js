import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const exisitingProduct=state.find(item=>item.id==action.payload.id)
            if(exisitingProduct){
                const remainingProducts=state.filter(item=>item.id!=exisitingProduct.id)
                exisitingProduct.quantity++
                exisitingProduct.totalPrice=exisitingProduct.quantity*exisitingProduct.price
                state=[...remainingProducts,exisitingProduct]

           
            }else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },
        removeCartItem:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        incQuantity:(state,action)=>{
            const exisitingProduct=state.find(item=>item.id==action.payload)
            exisitingProduct.quantity++
            exisitingProduct.totalPrice=exisitingProduct.quantity*exisitingProduct.price
            const remainingProducts=state.filter(item=>item.id!=exisitingProduct.id)
            state=[...remainingProducts,exisitingProduct]

        },
        decQuantity:(state,action)=>{
            const exisitingProduct=state.find(item=>item.id==action.payload)
            exisitingProduct.quantity--
            exisitingProduct.totalPrice=exisitingProduct.quantity*exisitingProduct.price
            const remainingProducts=state.filter(item=>item.id!=exisitingProduct.id)
            state=[...remainingProducts,exisitingProduct]

        },
        emptyCart:(state,action)=>{
            return state=[]
        }
    }
})
export const {addToCart,removeCartItem,incQuantity,decQuantity,emptyCart}=cartSlice.actions
export default cartSlice.reducer