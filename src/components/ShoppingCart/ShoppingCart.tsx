import React from 'react';
import List from '../List/List'
import {IProps} from '../IListInterface'
import "./shoppingCart.scss"


const ShoppingCart: React.FC<IProps> = (props:IProps) => {
  const {itemsObject, removeShoppingItem} = props;
  return (
  <div className="container">
    <button onClick={() => removeShoppingItem()}>Remove Shoppinglist</button>
    <List itemsObject={itemsObject}/>
  </div>);
  }

export default ShoppingCart