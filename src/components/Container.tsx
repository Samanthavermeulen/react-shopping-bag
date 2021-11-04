import React, {useState} from 'react'
import ShoppingCart from '../components/ShoppingCart/ShoppingCart'
import GroceryList from '../components/GroceryList/GroceryList'
import {IObject, IData} from './IListInterface'
import "./style.scss"

const Container: React.FC = ({}) => {
  const [groceryItems, setGroceryItems] = useState<IObject>({
    groceryItems: [
      { id: 1, title: "peer" },
      { id: 2, title: "Banana" }
    ]
  })

  const [shoppingListItems, SetshoppingListItems] = useState<IObject>({
    shoppingListItems: [
      { id: 3, title: "Appels" },
      { id: 4, title: "Pak melk" }
    ]
  })
  
  const handleClickGroceryItem = (id:number, title:string) =>{
    const listItem = {id: id, title:title}

    SetshoppingListItems((prevState:IObject) => {
      const shopArray = prevState.shoppingListItems
      shopArray.push(listItem)
      const shopObject = {shoppingListItems: shopArray}
      return shopObject
    })

    setGroceryItems((prevState:IObject) => {
      const groceryArray = prevState.groceryItems.filter((item) =>item.id !== listItem.id)
      const shopObject = {groceryItems: groceryArray}
      return shopObject
    })

    addAmountToItem()
  }

  const emptyCart = () => {
    SetshoppingListItems((() => {
      const newState = {shoppingListItems: [] as any[]}
      return newState
    }))
  }

  const addItemToGrocery = (data:IData) => {
    let object = {id: 0, title: ""}

    setGroceryItems((prevState:IObject) => {
      const groceryItemsArray = prevState.groceryItems
      let id = groceryItemsArray.at(-1) ? groceryItemsArray.at(-1).id + 1 : 0
      object = {id: id, title:data.title}
      groceryItemsArray.push(object)
      const result = {groceryItems: groceryItemsArray}
      return result
    })
  }

  const addAmountToItem = () => {
    SetshoppingListItems((prevState:IObject) => {
      const groceryArray = prevState.shoppingListItems
      let object = {}
      const duplicates = groceryArray.map((el, i) => {
        return groceryArray.find((element:{title:string}, index:number) => {
          if (i !== index && element.title === el.title) {
            return el
          }})
        }).filter(x => x)

      if(duplicates.length > 1){
        const {id, title, amount} = duplicates[1];
        const item = {id: id, title: title, amount: amount ? amount + 1 : duplicates.length}
        const newArr = groceryArray.filter(value => value.title !== item.title)
        newArr.push(item)
        object = {shoppingListItems: newArr}
        return object
      }
      return prevState
    })
  }
  return (
    <div>
      <header>
        <h1>Boodschappenlijst</h1>
      </header>
      <main>
        <section>
          <h1>Boodschappenlijst</h1>
          <GroceryList handleClickGroceryItem={handleClickGroceryItem} addItemToGrocery={addItemToGrocery} itemsObject={groceryItems}/>
        </section>
        <section>
          <h1>Winkelmand</h1>
          <ShoppingCart itemsObject={shoppingListItems} removeShoppingItem={emptyCart}/>
        </section>
      </main>
    </div>
    );
}

export default Container