import React from 'react'
import S from './Select.module.scss'

interface Option {
    value: number;
    label: string;
}

export const Select = ({ placeholder, required, options }: {
    placeholder: string, required: boolean, options: Option[]
}) => {

    return (
        <select
            className={S.select}
            required={required}
        >
            <option value=''>{placeholder}</option>
            {options?.map((item: Option) => (
                <option key={item.value} value={item.value}>{item.label}</option>
            ))}
        </select>
    )
}
