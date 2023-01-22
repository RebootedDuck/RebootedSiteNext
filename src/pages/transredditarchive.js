import listyles from '../components/list.module.css'
import Head from 'next/Head'

export default function transredditarchive() {
    return (
        <>
            <Head>
                <title>RTA</title>
            </Head>
            <h2>Reddit Transgender Sub-Reddit Archive - As many as possible</h2>
            <ul>
                <li className={listyles.listelement}><a className={listyles.link} href='https://reddit.com/r/egg_irl'>r/egg_irl</a></li>
                <li className={listyles.listelement}><a className={listyles.link} href='https://reddit.com/r/egg_irl'>r/egg_irl</a></li>
            </ul>
        </>
    )
}

