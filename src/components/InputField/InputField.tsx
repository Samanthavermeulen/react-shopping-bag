import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import {IProps} from '../IListInterface'
import {Inputs} from '../IFieldInterface'
import "./style.scss"



const InputField: React.FC<IProps> = (props:IProps) => {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => props.addItemToGrocery(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" defaultValue="Appels" {...register("title")} />    
      <input type="submit" />
    </form>
  );
  }

export default InputField