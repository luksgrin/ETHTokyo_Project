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
          Experience seamless music streaming with Play Protect:{" "}
          <ol className="List__Content">
            <li>Fans sign a message to authenticate their address.</li>
            <li>
              If the access control conditions are met, Lit Protocol nodes
              return BLS shares.
            </li>
            <li>
              The encryption key is formed, decrypting the media client-side.
            </li>
            <li>
              Fans can now enjoy streaming their favorite artist's work in a
              secure and decentralized manner.
            </li>
          </ol>
        </p>
        <div className={""}>
          <audio controls src={mediaSrc as string} />
        </div>
      </div>
    </div>
  );
};

export default Home;
