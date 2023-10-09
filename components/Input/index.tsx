import React from 'react'
import S from './Input.module.scss'

export const Input = ({ type,
    placeholder,
    pattern,
    required,
    onBlur,
    name,
    id,
    onChange,
    value,
}
    :
    {
        type?: string,
        placeholder?: string,
        pattern?: string,
        required?: boolean,
        onBlur?: any,
        name?: string,
        id?: string,
        onChange?: any
        value?: any
    }) => {

    return (
        <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            pattern={pattern}
            required={required}
            className={S.input}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
        />
    )
}
