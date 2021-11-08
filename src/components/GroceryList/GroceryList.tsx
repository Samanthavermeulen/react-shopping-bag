import React from 'react'
import List from '../List/List'
import InputField from '../InputField/InputField'
import {IProps} from '../IListInterface'


// TODO get the props from React Hooks 
const GroceryList: React.FC<any> = (props:any) => {
  const {itemsObject, addItemToGrocery, handleClickGroceryItem} = props
  return (
    <div>
      {/* <InputField itemsObject={itemsObject} addItemToGrocery={addItemToGrocery}/> */}
      <InputField />
      <List />
    </div>);
  }

export default GroceryList