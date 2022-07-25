import Head from "next/head";
import Globel from "./globel";
import styles from "../styles/Home.module.css";

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
