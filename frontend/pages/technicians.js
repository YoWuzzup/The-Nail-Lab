import Head from "next/head";
import { MainInfo } from "../components";

export default function technicians() {
  return (
    <>
      <Head>
        <title>Our Technicians</title>
      </Head>

      <div style={{ width: "100%", backgroundColor: "#ffe4d4" }}>
        <MainInfo header={"Our Technicians"}>
            {/* do the fetch of the stuff */}
        </MainInfo>
      </div>
    </>
  );
}
