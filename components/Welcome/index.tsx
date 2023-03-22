import React from 'react'
import { Button } from '../Button'
import LeadsWelcome from '/public/images/leads.svg'
import S from './Welcome.module.scss'
import Image from 'next/image'

export const Welcome = () => {
    return (
        <div className={S.container}>
            <div className={S.text}>
                <h1>Melhor agência de marketing do bairro</h1>
                <p>Somos uma agência de performance digital, aceleramos vendas e aquisição de leads para grandes marcas.</p>
                <Button title='Aumentar vendas' kind='secundary' />
            </div>
            <div className={S.image}>
                <Image src={LeadsWelcome} alt='imagem de leads' />
            </div>
        </div>
    )
}
