import Head from "next/head";
import { MainInfo, TreatmentsContent } from "../components";

export default function treatments() {
  return (
    <>
      <Head>
        <title>Our Treatments</title>
      </Head>

      <div style={{ width: "100%", backgroundColor: "#ffe4d4" }}>
        <MainInfo header={"Book Online"} />
        <TreatmentsContent />
      </div>
    </>
  );
}
