import Globe from "globe.gl";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "../../styles/Home.module.css";

const EARTH_RADIUS_KM = 6371; // km
const SAT_SIZE = 100; // km
const TIME_STEP = 3 * 1000; // per frame

const GlobelBox = () => {
  const ref = useRef();

  useEffect(() => {
    const myGlobe = new Globe();
    const world = myGlobe(ref.current)
      .width(700)
      .height(700)
      .backgroundColor("#000000")
      .globeImageUrl("/earth.jpg")

    const satGeometry = new THREE.OctahedronGeometry(
      (SAT_SIZE * world.getGlobeRadius()) / EARTH_RADIUS_KM / 2,
      1
    );
    const satMaterial = new THREE.MeshLambertMaterial({
      color: "palegreen",
      transparent: true,
      opacity: 1,
    });
    world.objectThreeObject(() => new THREE.Mesh(satGeometry, satMaterial));
  }, []);

  return (
    <div className={styles.list}>
      <div className={styles.box} ref={ref}></div>
      <div className={styles.info}>
        <h2>TerraQuanta</h2>
        <p>coming soon......</p>
      </div>
    </div>
  );
};

export default GlobelBox;
