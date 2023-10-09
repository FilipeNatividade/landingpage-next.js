import React, { useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup'

import { Button } from '../Button';
import { Input } from '../Input';
import { Select } from '../Select';
import { Loading } from '../Loading';
import { SuccessModal } from '../SuccessModal';
import { FailModal } from '../FailModal';

import S from './Contact.module.scss';

export const Contact = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [successModal, setSuccessModal] = useState(false)
    const [failModal, setFailModal] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            webSite: '',
            midia: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Campo obrigatório'),
            email: Yup.string()
                .email('E-mail inválido')
                .required('Campo obrigatório'),
            phone: Yup.string()
                .required('Campo obrigatório'),
            webSite: Yup.string()
                .required('Campo obrigatório'),
            midia: Yup.string()
                .required('Campo obrigatório'),
        }),
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: (values) => handleSubmitForm(values)
    })


    const handleSubmitForm = (value: any) => {
        setIsLoading(true)
        axios
            .post('/api/sendEmail', {
                messageBody: `Nome: ${value.name}, Email: ${value.email}, Telefone:${value.phone}, Site:${value.webSite}, Midia:${value.midia}`
            }).then(result => {
                formik.resetForm()
                setIsLoading(false)
                setSuccessModal(true)
            }).catch(err => {
                setIsLoading(false)
                setFailModal(true)
            }
            )
    }

    const closeModal = () => {
        setFailModal(false)
        setSuccessModal(false)
    }

    return (
        <>
            {successModal && <SuccessModal closeModal={closeModal} />}
            {failModal && <FailModal closeModal={closeModal} />}
            {isLoading && <Loading />}
            <div className={S.container} id='contato'>
                <div className={S.texts}>
                    <span>ENTRE EM CONTATO</span>
                    <h1>Aumente seu resultado de vendas e performance</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                </div>
                <div className={S.form}>
                    <h1>Fale com um especialista</h1>
                    <form id='formulario' onSubmit={formik.handleSubmit}>
                        <Input
                            id='name'
                            name='name'
                            type="text"
                            placeholder='Nome completo'
                            required={true}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        <Input
                            id='email'
                            name='email'
                            type="email"
                            placeholder='E-mail profissional'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            required={true}
                            value={formik.values.email}
                        />
                        <Input
                            id='phone'
                            name='phone'
                            type="text"
                            placeholder='Celular/Whatsapp'
                            // pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
                            required={true}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                        />
                        <Input
                            id='webSite'
                            name='webSite'
                            type="text"
                            placeholder='Site'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            required={false}
                            value={formik.values.webSite}
                        />
                        <Select
                            id='midia'
                            name='midia'
                            placeholder='Orçamento para mídia' required={true}
                            onChange={formik.handleChange}
                            value={formik.values.midia}
                            options={[
                                { value: 'instagram', label: 'Instagram' }, { value: 'Facebook', label: 'Facebook' }
                            ]} />
                        <Button
                            type='submit'
                            title='Enviar'
                            kind='full'
                        />
                    </form>
                </div>
                <div className={S.footer}>
                    <p>Ao enviar esse formulário, você reconhece que leu e concorda com a nossa <Link href='/'><span> Política de Privacidade</span></Link>.</p>
                </div>
            </div>
        </>
    )
}
