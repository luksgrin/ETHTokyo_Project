import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { useLitClient } from "../../hooks/useLitClient";
import { useAuthSig } from "../../hooks/useAuthSig";
import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const client = useLitClient({ chain: "ethereum" });

  const sig = useAuthSig();

  const [mediaSrc, setMediaSrc] = useState<string | Uint8Array | null>(null);

  // todo: grab cid from NFT

  const decrypt = async () => {
    const decryptedString = await LitJsSdk.decryptFromIpfs({
      authSig: sig,
      ipfsCid: "QmYnRtv3PLYj5C1NpoFXRGFjG1krbgczwrXVXJrJNSMLmH", // This is returned from the above encryption
      litNodeClient: client,
    });

    return decryptedString;
  };

  useEffect(() => {
    if (sig) {
      decrypt().then((media) => setMediaSrc(media));
    }
  }, [sig]);

  return (
    <div className={styles.container}>
      <div className="Card Audio__Container">
        <h1 className={styles.title}>
          <span className="Title__Song">Play Song</span>
        </h1>
        <p className="Text__Content">
          Try our amazing song stored at IPFS which only some amazing owners can
          hear due to our restrictions (Text for testing and therefore being
          able to fixe heights and stuff)
        </p>
        <div className={""}>
          <audio controls src={mediaSrc as string} />
        </div>
      </div>
    </div>
  );
};

export default Home;
