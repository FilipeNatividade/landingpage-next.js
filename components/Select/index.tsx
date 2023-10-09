import React from 'react'
import S from './Select.module.scss'

interface Option {
    value: string;
    label: string;
}

export const Select = ({
    placeholder,
    required,
    options,
    id,
    name,
    onChange,
    value
}
    :
    {
        placeholder?: string,
        required?: boolean,
        options?: Option[],
        id?: string,
        name?: string,
        onChange?: any,
        value?: any
    }) => {

    return (
        <select
            id={id}
            name={name}
            className={S.select}
            required={required}
            onChange={onChange}
            value={value}
        >
            <option value=''>{placeholder}</option>
            {options?.map((item: Option) => (
                <option key={item.value} value={item.value}>{item.label}</option>
            ))}
        </select>
    )
}
