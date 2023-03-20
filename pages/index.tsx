import { Inter } from 'next/font/google'
import styles from './Home.module.scss'
import { Header } from '@/components/Header'
import { Welcome } from '@/components/Welcome'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Welcome />
    </div>
  )
}
