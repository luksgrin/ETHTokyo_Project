import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import HeroImage from "../components/hero-image/hero";
import Upload from "../components/upload/Upload";
import Play from "../components/upload/Play";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Play Protect</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <HeroImage></HeroImage>
      <main className={styles.main}>
        <div className="Content Content__1">
          <h1 className={styles.title}>
            <span className="Title__Song">Welcome to Play Protect</span>
          </h1>
          <p className="Text__Content">
            Play Protect is{" "}
            <span className="bold">
              revolutionizing the way artists distribute and protect their music
            </span>
            , empowering them with a{" "}
            <span className="bold">decentralized and secure platform.</span>
          </p>

          <div className={styles.grid + " MainPage__Grid"}>
            <p>
              Join the New Era of Creativity with Play Protect, where artists
              can easily{" "}
              <span className="bold">
                upload music files to IPFS, set custom access conditions, and
                enable fans to stream or download music
              </span>{" "}
              by meeting some Lit conditions.
            </p>
            <a className={styles.card} href="#encrypt__section">
              <h2>Upload your music &rarr;</h2>
              <p>Show the world your art! </p>
            </a>
            <a className={styles.card} href="#decrypt__section">
              <h2>Listen to music &rarr;</h2>
              <p> Let's discover something 👀</p>
              {/* <p>
                Enjoy the newest music of your favorites artists, you just need
                to be valid by the conditions the artist create{" "}
              </p> */}
            </a>
          </div>
        </div>
        <div id="encrypt__section" className="Sections Content__2">
          <Upload></Upload>
        </div>
        <div id="decrypt__section" className="Sections Content__1">
          <Play></Play>
        </div>
        <div id="how__section" className="Sections Content__1">
          <h1 className={styles.title}>
            <span className="Title__Song">So how does this works...?</span>
          </h1>

          <p className="Text__Content">
            <ol className="List__Content">
              <li>
                1 - Music files are{" "}
                <span className="bold">encrypted using Lit Protocol's </span>{" "}
                SDK and threshold encryption scheme.
              </li>
              <li>
                2 - <span className="bold">Encrypted music</span> is published
                on IPFS,{" "}
                <span className="bold">
                  protecting the artist's intellectual property.
                </span>
              </li>
              <li>
                3 -{" "}
                <span className="bold">
                  Artists retain full control over their work
                </span>
                , setting conditions for decryption and playback.
              </li>
              <li>
                4 - Users that pass the conditions will be{" "}
                <span className="bold">able to decrypt and playback</span>
              </li>
            </ol>
          </p>
          <p className="Image__Content">
            <img src="/images/how.gif" alt="How is this done" />
          </p>
          <h1 className={styles.title}>
            <span className="Title__Song">Some Architecture</span>
          </h1>
          <p className="Text__Content">
            <ol className="List__Content">
              <li>
                - <span className="bold">NextJS</span> serves as the framework
                for building the user interface.
              </li>
              <li>
                - <span className="bold">Lit Protocol SDK</span> and its
                underlying threshold encryption scheme encrypt music files.
              </li>
              <li>
                - <span className="bold">IPFS</span>, a decentralized storage
                solution, hosts the encrypted music files.
              </li>
              <li>
                -Access control conditions and{" "}
                <span className="bold">Lit Actions</span> enable{" "}
                <span className="bold">
                  customizable decryption and playback conditions.
                </span>
              </li>
              <li>
                - <span className="bold">BLS shares</span> are returned by Lit
                Protocol nodes to form the
                <span className="bold">decryption key</span>, allowing
                client-side decryption and playback.
              </li>
            </ol>
          </p>

          <p className="Image__Content">
            <img src="/images/explanation.png" alt="Diagram" />
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.ethglobal.com"
          rel="noopener noreferrer"
          target="_blank"
          className="text-white"
        >
          Made with ❤️ at ETHGlobal Tokyo
        </a>
      </footer>
    </div>
  );
};

export default Home;
