import React from "react";

interface IButton {
    className: string
    buttonName: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Button: React.FC<any & IButton> = ({className, buttonName, onClick}) => {
    return (
        <button className={className} onClick={onClick}>{buttonName}</button>
    )
}