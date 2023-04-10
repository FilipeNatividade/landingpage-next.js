
import Image from 'next/image'
import Link from 'next/link';
import Logo from '/public/images/logo.svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import S from './Footer.module.scss'

export const Footer = () => {
    return (
        <div className={S.container}>
            <div className={`${S.column} ${S.columnPrincipal}`}>
                <Image src={Logo} alt='logo' />
                <h1 className={S.title}>0800 800 800</h1>
                <p>comercial@agencia.com.br</p>
            </div>
            <div className={S.column}>
                <h1>MENU</h1>
                <p>Quem somos</p>
                <p>Cases</p>
            </div>
            <div className={S.column}>
                <h1>CONTEÚDO</h1>
                <p>E-books</p>
                <p>Fórmulas prontas</p>
            </div>
            <div className={`${S.column} ${S.social}`}>
                <h1>SOCIAL</h1>
                <Link href='/' className={S.icon}>
                    <InstagramIcon />
                </Link>
                <Link href='/' className={S.icon}>
                    <FacebookIcon />
                </Link>
                <Link href='/' className={S.icon}>
                    <LinkedInIcon />
                </Link>
                <Link href='/' className={S.icon}>
                    <YouTubeIcon />
                </Link>
            </div>
            <div className={S.allRightReserved}>
                ©2022 AGENCIA - Todos os direitos reservados.
            </div>
        </div >
    )
}
