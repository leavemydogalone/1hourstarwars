import React from "react";
import styles from "../../styles/home.module.css";
import Card from "@/components/Card";
import { useQuery } from "react-query";
import InfoBar from "@/components/InfoBar";

export default function Main() {
  const { isLoading, isError, data, error } = useQuery("people", async () => {
    const stuff = await fetch(`https://swapi.dev/api/people/`);
    return await stuff.json();
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  console.log(data.results);
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className="h1">Star Wars</h1>
      </header>
      <div className={styles.content}>
        <section className={styles.infoContainer}>
          <InfoBar />
        </section>
        <section className={styles.cardContainer}>
          {data &&
            data.results.map((person) => (
              <Card person={person} key={person.name} />
            ))}
        </section>
      </div>
    </main>
  );
}
