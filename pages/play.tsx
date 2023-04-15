import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useLitClient } from '../hooks/useLitClient';
import { useAuthSig } from '../hooks/useAuthSig';
import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { useEffect, useState } from 'react';

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
    }

    useEffect(() => {
        if (sig) {
            decrypt().then((media) => setMediaSrc(media));
        }
    }, [sig]);


    return (
        <div className={styles.container}>
            <Head>
                <title>Play Media</title>
                <link href="/favicon.ico" rel="icon" />
            </Head>

            <main className={styles.main}>
                <ConnectButton />

                <h1 className={styles.title}>
                    Play Song
                </h1>

                <p className={styles.description}>
                    <audio controls src={mediaSrc as string} />
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
