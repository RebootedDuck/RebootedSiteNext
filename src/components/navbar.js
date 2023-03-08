import styles from "../components/navbar.module.css";
import Link from "next/link";
import { Roboto } from "@next/font/google";

const robotohard = Roboto({
  weight: "300",
  subsets: ["latin"],
});

export default function NavBar({ children }) {
  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.navbtn}>
          <h1 className={styles.navbtncontent}>
            <Link className={styles.navlink} href="/">
              RebooteDuck
              <div
                className={[styles.navbtnsecondary, robotohard.className].join(
                  " "
                )}
              >
                .DEV
              </div>
            </Link>
          </h1>
        </div>
        <div className={styles.navbtn}>
          <h1 className={styles.navbtncontent}>
            <a className={styles.navlink} href="https://blog.rebooteduck.dev">
              Blog
            </a>
          </h1>
        </div>
        {/*
        <div className={styles.navbtn}>
          <h1 className={styles.navbtncontent}>
            <Link href="/transredditarchive" className={styles.navlink}>
              RTA
            </Link>
          </h1>
        </div>
         */}
        <div className={styles.navbtn}>
          <h1 className={styles.navbtncontent}>
            <Link href="/software" className={styles.navlink}>
              Software
            </Link>
          </h1>
        </div>
        <div className={styles.navbtn}>
          <h1 className={styles.navbtncontent}>
            <Link href="/internals" className={styles.navlink}>
              Internals
            </Link>
          </h1>
        </div>
        <div className={styles.navbtn}>
          <h1 className={styles.navbtncontent}>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://oxfordpride.uk"
              className={[styles.rainbowtext, styles.navlink].join(" ")}
            >
              Oxford Pride
            </a>
          </h1>
        </div>
      </header>
    </>
  );
}
