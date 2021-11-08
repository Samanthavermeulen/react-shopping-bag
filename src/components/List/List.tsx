import React, {useEffect} from 'react'
import ListItem from '../ListItem/ListItem'
import {IProps} from '../IListInterface'
import "./list.scss"
import { connect } from "react-redux"
import shoppingCartReducer from '../../reducers/shoppingCart'
import { ids } from 'webpack'
// FIXME NEED TO READ THIS ARTICLE => https://www.johnraptis.dev/using-redux-with-classes-and-hooks/
class List extends React.PureComponent<any, any> {
  
   constructor(props: any) {
     super(props),
     this.state = {
      renderList: false
    }
    }

  // need to read this: https://stackoverflow.com/questions/64850713/react-redux-useselector-causing-component-to-render-twice
  componentDidMount(){
    
  }
    shoppingListItems():any {
      const {cart} = this.props.shop
      const {shoppingListItems} = cart
      return shoppingListItems.map((item: any) => {
      return <ListItem 
        id={item.id + item.title} 
        type={"shoppingListItems"}
        title={item.title}
        key={item.id}
        />
    })
    }

    groceryItems():any {
      const {cart, list} = this.props.shop
      const {groceryItems} = list
    return groceryItems.map((item: any) => {
      return <ListItem 
        id={item.id + item.title} 
        type={"groceryItems"}
        title={item.title}
        key={item.id}
        />
    })

    }

   ObjectToListItem(): any{
    const {cart, list} = this.props.shop
    const {shoppingListItems} = cart
    const {groceryItems} = list
    console.log(this.props.shop)
    // FIXME need look into it
    // shoppingListItems.map((item: any) => {
    //   return <ListItem 
    //     id={item.id + item.title} 
    //     type={"shoppingListItems"}
    //     title={item.title}
    //     />
    // })
    // groceryItems.map((item: any) => {
    //   return <ListItem 
    //     id={item.id + item.title} 
    //     type={"groceryItems"}
    //     title={item.title}
    //     />
    // })

    // return Array(shoppingListItems, groceryItems)
    //  const GroceryItemsObject = this.props.itemsObject
    // for (const [key] of Object.entries(shop)) {
    //   console.log(shop[key])
    //   return cart[key].map((object: any) => {
    //     if(key === "groceryItems"){
    //       // return <ListItem 
    //       //   handleClickGroceryItem={this.props.handleClickGroceryItem} 
    //       //   key={object.id + object.title}
    //       //   title={object.title}
    //       //   id={object.id}
    //       //   type={key}
    //       // />
    //     }else{
    //       return <ListItem 
    //         key={object.id + object.title}
    //         title={object.title}
    //         id={object.id}
    //         type={key}
    //         amount={object.amount}
    //       />
    //     }
    //   })
    // }
   }
  
    render() {
      return (<ul>{[this.shoppingListItems(), this.groceryItems()]}</ul>);
    }
  }

  const mapStateToProps = (state: any) => ({
    shop: state,
  })
  
  export default connect(mapStateToProps, null)(List)

// export default List