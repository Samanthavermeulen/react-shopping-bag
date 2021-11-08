import React from 'react'
import List from '../List/List'
// import {IProps} from '../IListInterface'
import "./shoppingCart.scss"
import {useDispatch} from 'react-redux'
import {emptyCart} from '../../actions/index'

// NOTE NEED THE IMPORT THE EMPTYCART


const ShoppingCart: React.FC<any> = (props:any) => {
  // const {itemsObject, removeShoppingItem} = props
  const dispatch = useDispatch()
  return (
  <div className="container">
    <button onClick={() => dispatch(emptyCart())}>Remove Shoppinglist</button>
    {/* <List itemsObject={itemsObject}/> */}
    <List/>
  </div>);
  }

export default ShoppingCart