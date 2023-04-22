import Head from "next/head";
import Main from "./main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Star Wars</title>
        <meta
          name="description"
          content="Star wars characters and some planet info and stuff"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Main />
    </>
  );
}
