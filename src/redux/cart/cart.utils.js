export const addItemToCart = (cartItems, cartItemToAdd) => {
        const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
        if (existingCartItem) {
                return cartItems.map(x => x.id === cartItemToAdd.id ? { ...x, quantity: x.quantity + 1 } : x);
        }
        return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
        console.log('REMOVEEEE');
        const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
        if (existingCartItem.quantity === 1) {
                return cartItems.filter(x => x.id !== cartItemToRemove.id);
        }
        return cartItems.map(x => x.id === cartItemToRemove.id ? {
                ...x, quantity: x.quantity - 1
        } : x);
}