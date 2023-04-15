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
        <span>
          Play Protect enables artists to store their music securely on IPFS:
        </span>
        <ol className="List__Content">
          <li>
            Artists can upload encrypted music files to IPFS using the
            user-friendly interface.
          </li>
          <li>
            Define custom access control conditions for media decryption and
            playback.
          </li>
          <li>
            Stream or download music by meeting artist-defined conditions.
          </li>
          <li>Fans can authenticate their addresses by signing a message.</li>
          <li>
            Access a vast array of on-chain and off-chain resources for media
            licensing.
          </li>
        </ol>
      </p>
      <p className={styles.description}>
        <DragAndDropUpload authSig={sig} />
      </p>
    </div>
  );
};

export default Home;
