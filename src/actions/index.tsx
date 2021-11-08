export const emptyCart = () => {
    return {
        type: 'EMPTY_CART'
    }
}

export const addList = (name:any) => {
    return {
        type: 'ADD_LIST',
        name: name
    }
}