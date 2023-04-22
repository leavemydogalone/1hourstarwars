import React, { useState } from "react";
import styles from "../styles/Card.module.css";
import { useQuery } from "react-query";

export default function Card({ person }) {
  //   console.log(person);

  const [open, setOpen] = useState(false);

  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{person.name}</h3>
      <p>Height: {person.height}</p>
      <p>Birth year: {person.birth_year}</p>
      <button
        className={styles.button}
        onClick={() => setOpen((prev) => !prev)}
      >
        More Info
      </button>
      {open && (
        <div className={styles.additionalInfo}>
          <p>Skin Color: {person.skin_color}</p>
        </div>
      )}
    </article>
  );
}

{
  /* <p>Films: <ul>{person.films && person.films.map(film => {
            <li>film.</li>
      })}</ul></p> */
}
