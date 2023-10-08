import React from 'react'
import S from './Button.module.scss'


export const Button = ({ title, kind }: { title: string, kind: "primary" | "secundary" | "full" }) => {

    const generationClassByKind = () => {
        if (kind === 'secundary') return S.secondary;
        if (kind === 'full') return S.full;
        return S.primary;
    }

    return (
        <button className={`${S.button} ${generationClassByKind()}`}>{title}</button>
    )
}
