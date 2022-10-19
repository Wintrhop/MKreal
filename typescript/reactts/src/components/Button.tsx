import React, { SyntheticEvent, ButtonHTMLAttributes } from "react"


type ButtonProps = {
  title?: string,
  children: React.ReactNode,
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"]
  clicke: any
}

const Button = (props:ButtonProps) => {
    const { title, children, type, clicke } = props

    const handleClick = (e: SyntheticEvent) => {
        clicke();
      }
  return (
    <button onClick={handleClick} type={type}>{children}</button>
  )
}

export default Button