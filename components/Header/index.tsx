import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../Button'
import { ScrollTo } from '../../utils/scrollTo'
import Logo from '/public/images/logo.svg'
import S from './Header.module.scss'

export const Header = () => {
    return (
        <div className={S.container}>
            <div>
                <Image src={Logo} alt='logo' />
            </div>
            {/* <div className={S.menu}>
                <Link href='/'>Home</Link>
                <Link href='/'>O que fazemos</Link>
                <Link href='/'>Cases</Link>
            </div> */}
            <div className={S.action}>
                <Button title='Fale Conosco' kind='primary' onClick={() => ScrollTo('contato')} />
            </div>
        </div>
    )
}
