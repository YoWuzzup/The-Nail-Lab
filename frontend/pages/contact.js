import Head from "next/head";
import { MainInfo, MyGoogleMap } from "../components";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>

      <div style={{ width: "100%", backgroundColor: "#ffe4d4" }}>
        <MainInfo header={"Contact Us"} />

        <MyGoogleMap />
      </div>
    </>
  );
}
