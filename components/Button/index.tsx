import React from 'react'
import S from './Button.module.scss'


export const Button = ({
    title,
    kind,
    type,
    onClick,
}: {
    title?: string,
    kind?: "primary" | "secundary" | "full",
    type?: any | undefined,
    onClick?: any
}) => {

    const generationClassByKind = () => {
        if (kind === 'secundary') return S.secondary;
        if (kind === 'full') return S.full;
        return S.primary;
    }

    return (
        <button
            type={type}
            className={`${S.button} ${generationClassByKind()}`}
            onClick={onClick}
        >
            {title}
        </button>
    )
}
