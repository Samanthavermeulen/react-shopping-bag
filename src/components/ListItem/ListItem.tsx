import React,{ReactElement} from 'react';
import {IListItem} from '../IListInterface'
import "./style.scss"

const ListItem: React.FC<IListItem> = (props) => {
  let li: ReactElement
  
  if(props.type === "groceryItems"){
    li = (<li className="list-item groceryItems" key={props.id} value={props.title} onClick={() => props.handleClickGroceryItem(props.id, props.title)}>{props.title}</li>)
  }else{
    li = (<li className="list-item shoppingItems" key={props.id} value={props.title}>{props.title} Hoeveelheid:{props.amount ? props.amount : 1}</li>)
  }
  return (li);
}

export default ListItem