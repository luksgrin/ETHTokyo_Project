import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import DragAndDropUpload from '../components/upload/DragAndDropUpload';
import { useLitClient } from '../hooks/useLitClient';
import { useAuthSig } from '../hooks/useAuthSig';

const Home: NextPage = () => {
    const client = useLitClient({ chain: "ethereum" });

    useAuthSig();
    return (
        <div className={styles.container}>
            <Head>
                <title>Upload Media</title>
                <link href="/favicon.ico" rel="icon" />
            </Head>

            <main className={styles.main}>
                <ConnectButton />

                <h1 className={styles.title}>
                    Upload your song
                </h1>

                <p className={styles.description}>
                    <DragAndDropUpload />
                </p>

            </main>

            <footer className={styles.footer}>
                <a href="https://www.ethglobal.com" rel="noopener noreferrer" target="_blank">
                    Made with ❤️ at ETHGlobal Tokyo
                </a>
            </footer>
        </div>
    );
};

export default Home;
