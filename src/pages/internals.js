import Head from "next/head";
import generalstyles from "../components/general.module.css";
import listyles from "../components/list.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={generalstyles.content}>
        <div>
          <Head>
            <title>Internals</title>
            <meta
              name="description"
              content="Homepage of the website of @rebooteduck"
            ></meta>
          </Head>
        </div>
        <h2>Various miscellaneous internal files that might be useful</h2>
        <ul>
          <li className={listyles.listelement}>
            <Link href="/robots.txt" className={listyles.link}>
              <h3>Robots.txt</h3>
            </Link>
          </li>
          <li className={listyles.listelement}>
            <Link href="/security.txt" className={listyles.link}>
              <h3>Security.txt</h3>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
