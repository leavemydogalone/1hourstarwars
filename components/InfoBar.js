import React from "react";
import styles from "../styles/InfoBar.module.css";
import InfoCard from "./InfoCard";

export default function InfoBar() {
  const list = [
    "films",
    "people",
    "planets",
    "species",
    "starships",
    "vehicles",
  ];

  return (
    <div className={styles.bar}>
      {list.map((item) => (
        <InfoCard key={item} url={item} />
      ))}
    </div>
  );
}
