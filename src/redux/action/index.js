// This is for adding an item to the cart
export const addCart = (product) => {
    return {
        type: "ADDCART",
        payload: product,
    };
};

// This is for deleting an item from the cart
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product,
    };
};
