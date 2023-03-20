import React from 'react'
import S from './Welcome.module.scss'
import { Button } from '../Button'

export const Welcome = () => {
    return (
        <div className={S.container}>
            <div className={S.text}>
                <h1>Melhor agência de marketing do bairro</h1>
                <p>Somos uma agência de performance digital, aceleramos vendas e aquisição de leads para grandes marcas.</p>
                <Button title='Aumentar vendas' kind='secundary' />
            </div>
            <div className={S.image}></div>
        </div>
    )
}
