import Head from "next/head";
import { useRouter } from "next/router";
import { SingleServicePage } from '../../components/'

export default function TreatmentsID() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{router.query.id}</title>
      </Head>

      <div style={{ width: "100%", backgroundColor: "#ffe4d4" }}>
        <SingleServicePage name={router.query.id}/>
      </div>
    </>
  );
}
