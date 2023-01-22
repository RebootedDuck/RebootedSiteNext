import styles from '../components/navbar.module.css'
import Link from 'next/link';

export default function NavBar({ children }) {
    return (
        <>  
            <header className={styles.navbar}>
                <div className={styles.navbtn}>
                    <h1 className={styles.navbtncontent}><Link className={styles.navlink} href="/">RebooteDuck</Link></h1>
                </div>
                <div className={styles.navbtn}>
                    <h1 className={styles.navbtncontent}><a className={styles.navlink} href="https://blog.rebooteduck.dev">Blog</a></h1>
                </div>
                <div className={styles.navbtn}>
                    <h1 className={styles.navbtncontent}><Link href="/transredditarchive" className={styles.navlink}>RTA</Link></h1>
                </div>
                <div className={styles.navbtn}>
                    <h1 className={styles.navbtncontent}><a href="https://oxfordpride.uk" className={styles.navlink}>Oxford Pride</a></h1>
                </div>
            </header>
        </>
    )
}