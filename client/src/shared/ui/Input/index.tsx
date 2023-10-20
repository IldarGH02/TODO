import React from "react";

interface IInput {
    className: string
    type: string
    placeholder?: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    value: string
}

export const Input: React.FC<any & IInput> = ({className, type, placeholder, onChange, value}) => {
    return (
        <input className={className} type={type} placeholder={placeholder} onChange={onChange} value={value}/>
    )
}