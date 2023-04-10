import React from 'react'
import S from './Contact.module.scss';
import { Button } from '../Button';
import { Input } from '../Input';
import { Select } from '../Select';
import Link from 'next/link';

export const Contact = () => {
    return (
        <div className={S.container}>
            <div className={S.texts}>
                <span>ENTRE EM CONTATO</span>
                <h1>Aumente seu resultado de vendas e performance</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
            <div className={S.form}>
                <h1>Fale com um especialista</h1>
                <form>
                    <Input
                        type="text"
                        placeholder='Nome completo'
                        required={true}
                        pattern={undefined}
                    />
                    <Input
                        type="email"
                        placeholder='E-mail profissional'
                        pattern={undefined}
                        required={true}
                    />
                    <Input
                        type="text"
                        placeholder='Celular/Whatsapp'
                        pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
                        required={true}
                    />
                    <Input
                        type="text"
                        placeholder='Site'
                        pattern={undefined}
                        required={false}
                    />
                    <Select
                        placeholder='Orçamento para mídia' required={true}
                        options={[
                            { value: 1, label: 'Instagram' }, { value: 2, label: 'Facebook' }
                        ]} />
                    <Button title='Enviar' kind='full' />
                </form>
            </div>
            <div className={S.footer}>
                <p>Ao enviar esse formulário, você reconhece que leu e concorda com a nossa <Link href='/'><span> Política de Privacidade</span></Link>.</p>
            </div>
        </div>
    )
}
