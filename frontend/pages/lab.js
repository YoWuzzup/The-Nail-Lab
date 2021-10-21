import Head from "next/head";
import { MainInfo } from "../components";

export default function Contact() {
  return (
    <>
      <Head>
        <title>The Lab</title>
      </Head>

      <div style={{ width: "100%", backgroundColor: "#ffe4d4" }}>
        <MainInfo header={"Contact Us"} />

      </div>
    </>
  );
}
