import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import { useEffect, useState } from "react";
import { WagmiConfig } from "wagmi";

import { chains, client } from "../wagmi";

function App({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains}>
        <Head>
          <title>My wagmi + RainbowKit App</title>
        </Head>

        {mounted && <Component {...pageProps} />}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
