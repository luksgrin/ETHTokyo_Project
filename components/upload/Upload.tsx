import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import DragAndDropUpload from "../../components/upload/DragAndDropUpload";
import { useLitClient } from "../../hooks/useLitClient";
import { useAuthSig } from "../../hooks/useAuthSig";

const Home: NextPage = () => {
  const client = useLitClient({ chain: "ethereum" });

  const sig = useAuthSig();

  return (
    <div className={styles.container}>
      <ConnectButton />
      <h1 className={styles.title}>Upload your song</h1>

      <p className={styles.description}>
        <DragAndDropUpload authSig={sig} />
      </p>
    </div>
  );
};

export default Home;
