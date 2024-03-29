import { createSlice } from '@reduxjs/toolkit'
import swal from 'sweetalert';

const cartSlice = createSlice({
    name: "product",
    initialState: {
        product: [],
        cart: [],
        total: 0,
        order: {}
    },
    reducers: {
        addToProduct: (state, action) => {
            state.product = action.payload;
        },
        addToCart: (state, action) => {

            const restCart = [...state.cart, action.payload];
            console.log(restCart)
            const arrayUniqueByKey = [

                ...new Map(restCart.map((item) => [item["_id"], item])).values(),
            ];

            state.cart = arrayUniqueByKey

        },
        deleteProduct: (state, action) => {
            console.log('payload', action.payload)
            state.cart = state.cart.filter(pd => pd._id !== action.payload._id)
        },
        addTotal: (state, action) => {
            state.total = action.payload;
        },
        addToOrder: (state, action) => {
            state.order = action.payload;
        },
        clearOrder: (state, action) => {
            state.order = action.payload;
        },
        clearCart: (state, action) => {
            state.cart = action.payload;
        }

        // updateQuantity:(state,{payload})=>{
        //     if (payload === "dec") {
        //         state.quantity > 1 && setQuantity(quantity - 1)
        //     }
        //     else {
        //         setQuantity(quantity + 1)
        //     }
        // }

    }
})

export const { addToCart, deleteProduct, addToProduct, addTotal, clearCart, addToOrder, clearOrder } = cartSlice.actions;

export default cartSlice.reducer;