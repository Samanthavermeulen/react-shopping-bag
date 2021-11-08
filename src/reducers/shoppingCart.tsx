const shoppingListItems = {
    shoppingListItems: [
        { id: 3, title: "Appels" },
        { id: 4, title: "Pak melk" }
    ]
};
const shoppingCartReducer = (state = shoppingListItems, action:any) => {
    switch (action.type) {
        case 'EMPTY_CART':
            return state = {shoppingListItems:[] as any[]}  
        default:
            return state
    }

}

export default shoppingCartReducer