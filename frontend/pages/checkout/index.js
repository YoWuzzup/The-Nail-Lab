import Head from "next/head";
import { CheckoutContent } from "../../components";

export default function checkout() {
  return (
    <>
      <Head>
        <title>Сheckout</title>
      </Head>

      <div style={{ width: "100%", backgroundColor: "#ffe4d4" }}>
        <CheckoutContent />
      </div>
    </>
  );
}
