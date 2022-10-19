import React, { SyntheticEvent, ButtonHTMLAttributes, InputHTMLAttributes } from "react"

type InputProps ={
    title?: string,
    id: string,
    type: InputHTMLAttributes<HTMLInputElement>['type'],
    name:string,
    clickchange: any

}

const Input = (props:InputProps)=>{
const {title, id, type, name, clickchange} = props
    return(
<input id={id} type={type} name={name} onChange={clickchange} />
    )
}

export default Input