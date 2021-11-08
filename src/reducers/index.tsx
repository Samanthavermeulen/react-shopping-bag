import { combineReducers } from 'redux'
import shoppingCartReducer from './shoppingCart'
import shoppingListReducer from './shoppingList'

const allReducers = combineReducers({
    cart: shoppingCartReducer,
    list: shoppingListReducer
})

export default allReducers