import React from 'react'
import "./Input.css"
import { InputPropTypes } from '../../Types'

function Input({ type, placeholder, required, value, setValue }: InputPropTypes) {
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (setValue) setValue(e.target.value)
    }
    return (
        <input type={type} placeholder={placeholder} className='input-tag' required={required} value={value} onChange={handleOnChange} />
    )
}

export default Input