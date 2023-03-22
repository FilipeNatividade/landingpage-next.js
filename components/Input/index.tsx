import React from 'react'
import S from './Input.module.scss'

export const Input = ({ type, placeholder, pattern, required }: { type: string, placeholder: string, pattern: string | undefined, required: boolean }) => {

    return (
        <input
        className={S.input}
            type={type}
            placeholder={placeholder}
            pattern={pattern}
            required={required}
        />
    )
}
