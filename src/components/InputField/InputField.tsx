import React, {useState} from 'react'
// import {useForm, SubmitHandler} from 'react-hook-form'
import {IProps} from '../IListInterface'
import {Inputs} from '../IFieldInterface'
import { createStore, combineReducers } from 'redux'
import "./inputfield.scss"
import {useDispatch} from 'react-redux'
import {addList} from '../../actions/index'
// FIXME https://redux-form.com/8.3.0/docs/gettingstarted.md/
const InputField: React.FC<any> = (props:any) => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  // https://www.youtube.com/watch?v=kK_Wqx3RnHk
  // const { register, handleSubmit } = useForm<Inputs>()
  // const onSubmit: SubmitHandler<Inputs> = data => props.addItemToGrocery(data)
  function handleSubmit(event: any){
    event.preventDefault()
    dispatch(addList(name))
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
      <input type="submit" />
    </form>
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input type="text" defaultValue="Appels" {...register("title")} />    
    //   <input type="submit" />
    // </form>
  );
  }

export default InputField