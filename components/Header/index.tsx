import Image from 'next/image'
import Link from 'next/link'
import Logo from '/public/images/logo.svg'
import S from './Header.module.scss'

export const Header = () => {
    return (
        <div className={S.container}>
            <div>
                <Image src={Logo} alt='logo' />
            </div>
            <div className={S.menu}>
                <Link href='/'>Home</Link>
                <Link href='/'>O que fazemos</Link>
                <Link href='/'>Cases</Link>
            </div>
            <div>
                <button className={S.button}>Fale conosco</button>
            </div>
        </div>
    )
}
