import React,{ReactElement} from 'react';
import {IListItem} from '../IListInterface'
import "./listItem.scss"

const ListItem: React.FC<any> = (props:any) => {
  let li: ReactElement;
  console.log(props)
  if(props.type === "groceryItems"){
    li = (<li className="list-item groceryItems" key={props.id} value={props.title} onClick={() => props.handleClickGroceryItem(props.id, props.title)}>{props.title}</li>)
  }
  if(props.type === "shoppingListItems"){
    li = (<li className="list-item shoppingItems" key={props.id} value={props.title}>{props.title} Hoeveelheid:{props.amount ? props.amount : 1}</li>)
  }
  return (li);
}

export default ListItem