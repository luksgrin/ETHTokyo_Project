// import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import DragAndDropUpload from "../../components/upload/DragAndDropUpload";
import { useLitClient } from "../../hooks/useLitClient";
import { useAuthSig } from "../../hooks/useAuthSig";

const Home: NextPage = () => {
  const client = useLitClient({ chain: "ethereum" });

  const sig = useAuthSig();

  return (
    <div className={styles.container}>
      {/* <ConnectButton /> */}
      <h1 className={styles.title}>
        <span className="Title__Song">Upload your Song</span>
      </h1>
      <p className="Text__Content">
        Upload your song to IPFS LOREM IPSUM LOREM IPSUMLOREM IPSUMLOREM
        IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUM LOREM
        IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUM LOREM IPSUMLOREM IPSUMLOREM IPSUM
        LOREM IPSUMLOREM IPSUM
      </p>
      <p className={styles.description}>
        <DragAndDropUpload authSig={sig} />
      </p>
    </div>
  );
};

export default Home;
