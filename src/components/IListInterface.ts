interface IData {
  title: string
}

interface IProps {
    itemsObject: IObject,
    handleClickGroceryItem?: (id?:number, title?:string) => void,
    removeShoppingItem?: <T>() => void,
    addItemToGrocery?: (data:IData) => void,
  }
  
  interface IObject {
    [index:string]: Array<IType>
  }
  
  interface IType {
    id: number,
    title: string,
    amount?: number,
  }

  interface IListItem {
    title: string,
    id: number,
    type: string,
    amount?: number,
    handleClickGroceryItem?: (id?: number, title?:string) => void
  }

  export {
    IProps,
    IObject,
    IType,
    IListItem,
    IData
  }