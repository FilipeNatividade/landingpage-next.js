import React from 'react'
import S from './Button.module.scss'


export const Button = ({ title, kind }: { title: string, kind: "primary" | "secundary" }) => {

    const generationClassByKind = () => {
        if (kind === 'secundary') return S.secondary;
        return S.primary;
    }

    console.log(generationClassByKind())

    return (
        <button className={`${S.button} ${generationClassByKind()}`} onClick={() => console.log('title:', title)}>{title}</button>
    )
}
