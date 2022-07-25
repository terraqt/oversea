import dynamic from "next/dynamic";
import styles from "../../styles/Home.module.css";

const Globe = dynamic(import("react-globe.gl"), { ssr: false });

const GlobelBox = () => {
  return (
    <div className={styles.list}>
      <div className={styles.box}>
        <Globe
          width={700}
          height={700}
          backgroundColor="#000"
          globeImageUrl="/earth.jpg"
        />
      </div>
      <div className={styles.info}>
        <h2>TerraQuanta</h2>
        <p>coming soon......</p>
      </div>
    </div>
  );
};

export default GlobelBox;
