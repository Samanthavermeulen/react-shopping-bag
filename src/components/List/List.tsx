import React from 'react'
import ListItem from '../ListItem/ListItem'
import {IProps} from '../IListInterface'
import "./list.scss"


class List extends React.Component<IProps> {
   constructor(props: IProps) {
     super(props)
   }
   
   ObjectToListItem(): JSX.Element[]{
    const GroceryItemsObject = this.props.itemsObject
    for (const [key] of Object.entries(GroceryItemsObject)) {
      return GroceryItemsObject[key].map(object => {
        if(key === "groceryItems"){
          return <ListItem 
            handleClickGroceryItem={this.props.handleClickGroceryItem} 
            key={object.id + object.title}
            title={object.title}
            id={object.id}
            type={key}
          />
        }else{
          return <ListItem 
            key={object.id + object.title}
            title={object.title}
            id={object.id}
            type={key}
            amount={object.amount}
          />
        }
      })
    }
   }

    render() {
      return (<ul>{this.ObjectToListItem()}</ul>);
    }
  }

export default List