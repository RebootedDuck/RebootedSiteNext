import styles from '../components/footer.module.css'
import Link from 'next/link';
import { Roboto } from '@next/font/google'

const robotohard = Roboto({ 
    weight: '500',
    subsets: ['latin'],
   })

export default function Footer({ children }) {
    return (
        <>  
            <footer className={styles.footbar}>
                <div className={styles.footbtn}>
                    <h1 className={styles.footbtncontent}><a className={styles.footlink} href="https://www.google.com/search?q=ducks&tbm=isch">Ducks</a></h1>
                </div>
            </footer>
        </>
    )
}