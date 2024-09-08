export const addToCart = (item) => {
    return {
        type: 'ADD_TO_CART',
        payload: item,
    };
};

export const removeFromCart = (itemId) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: itemId,
    };
};

export const removeFromProductList = (itemId) => {
    return {
        type: 'REMOVE_PRODUCT',
        payload: itemId,
    };
};

export const addProduct = (productData) => {
    return {
        type: 'ADD_PRODUCT',
        payload: productData,
    };
};

export const addProductList = (productList) => {
    return {
        type: 'ADD_PRODUCTLIST',
        payload: productList,
    };
};