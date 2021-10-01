import Head from "next/head";
import { MainPicture, WelcomeBlock } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Nail Lab</title>
        <meta name="description" content="The Nail Lab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainPicture />
      <WelcomeBlock />
    </>
  );
}
