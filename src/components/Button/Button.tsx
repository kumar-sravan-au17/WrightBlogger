import React from 'react'
import "./Button.css"
import { ButtonProps } from '../../Types'

function Button({ buttonText, onClick, type, disabled, primary }: ButtonProps) {
    return (
        <button className={`btn ${primary && `primary`}`} onClick={onClick} type={type} disabled={disabled}>{buttonText}</button>
    )
}

export default Button