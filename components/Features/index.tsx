import React from 'react'
import Icon from '/public/images/icon.svg'
import Image from 'next/image'
import S from './Features.module.scss'

export const Features = () => {
    return (
        <div className={S.container}>
            <h1>Neste bairro, não há agência melhor. Garantimos.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className={S.features}>
                <div className={S.feature}>
                    <Image src={Icon} alt='icone de feature' />
                    <h1>Digital Strategy</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <div className={S.feature}>
                    <Image src={Icon} alt='icone de feature' />
                    <h1>Estratégia digital</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <div className={S.feature}>
                    <Image src={Icon} alt='icone de feature' />
                    <h1>Social Midia</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <div className={S.feature}>
                    <Image src={Icon} alt='icone de feature' />
                    <h1>Social Midia</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

            </div>
        </div>
    )
}
