const groceryItems = {
    groceryItems: [
      { id: 1, title: "peer" },
      { id: 2, title: "Banana" }
    ]
  }



const shoppingListReducer = (state = groceryItems, action:any) => {
    switch (action.type) {
        case 'ADD_LIST':
            return addItemToGrocery(action.name, state)
        default:
            return state
    }
}

const addItemToGrocery = (data:any, state:any) => {
  let object = {id: 0, title: ""}
    const groceryItemsArray = state.groceryItems
    console.log(groceryItemsArray)
    let id = groceryItemsArray.at(-1) ? groceryItemsArray.at(-1).id + 1 : 0
    object = {id: id, title:data}
    groceryItemsArray.push(object)
    const result = {groceryItems: groceryItemsArray}
    return result
}

export default shoppingListReducer




// addItemToGrocery