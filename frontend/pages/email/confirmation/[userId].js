import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { postUserConfirmed } from "../../../api";

export default function EmailConfirmation() {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    postUserConfirmed({ confirmed: true, id: router.query.userId });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  return (
    <>
      <Head>
        <title>{router.query.userId}</title>
      </Head>

      <div
        style={{
          width: "100%",
          backgroundColor: "#ffe4d4",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "55vh",
        }}
      >
        {router.query.userId} CONFIRMED
      </div>
    </>
  );
}
