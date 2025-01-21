const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;

    switch (action.type) {
        case "ADDCART":
            // Check if the product already exists
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                // Increase the quantity
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    },
                ];
            }

        case "DELITEM":
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty === 1) {
                // Remove the item from the cart
                return state.filter((x) => x.id !== exist1.id);
            } else {
                // Decrease the quantity
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                );
            }

        default:
            
            return state;
    }
};

export default handleCart;
