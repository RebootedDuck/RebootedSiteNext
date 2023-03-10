import Head from "next/head";
import Image from "next/image";
import generalstyles from "../components/general.module.css";

export default function Home() {
  return (
    <>
      <div className={generalstyles.content}>
        <div>
          <Head>
            <title>RebooteDuck</title>
            <meta
              name="description"
              content="Homepage of the website of @rebooteduck"
            ></meta>
          </Head>
        </div>
        <h2>Hi I&apos;m RebooteDuck, I make things sometimes</h2>
      </div>
    </>
  );
}
