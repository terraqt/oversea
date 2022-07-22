import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

const Globel = dynamic(() => import("./globel"), {
  ssr: false
});

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>TerraQuanta</title>
        <meta name="tq" content="TerraQuanta" />
        <link rel="icon" href="/titlelogo.png" />
      </Head>

      <main className={styles.main}>
        <Globel />
      </main>
    </div>
  );
}
