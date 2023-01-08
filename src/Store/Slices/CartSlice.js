import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: { showCart: false, cartQuantity: 0, cartItems: []},
    reducers : {
        showCart(state) {
            state.showCart = !state.showCart
        },
        addQuantityToCart(state) {
            state.cartQuantity += 1
        },
        addToCart(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if(!existingItem) {
                state.cartItems.push(action.payload)
            } else {
                existingItem.quantity += action.payload.quantity
            }
        },
        incrementItemQuantity(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.itemId);
            existingItem.quantity++;
        },
        decrementItemQuantity(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.itemId);

            if(existingItem.quantity === 1) {
                const index = state.cartItems.findIndex(item => item.id === action.payload.itemId);
                state.cartItems.splice(index, 1)
                return state;
            }

            existingItem.quantity--;
        },
        clearCart(state) {
            state.cartQuantity = 0;
            state.cartItems = []
        }
    }
});