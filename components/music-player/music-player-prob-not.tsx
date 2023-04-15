import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <main className="player">
        <div className="header">
          <a href="#" className="button">
            <i className="fas fa-bars" aria-hidden="true"></i>
            <span className="sr-only">menu bar</span>
          </a>
          <p>Now Playing</p>
          <a href="#" className="button">
            <i className="fas fa-search" aria-hidden="true"></i>
            <span className="sr-only">Search</span>
          </a>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuBNBcOFFjXIkz4EkF_AyxysJil8Vldwb-Q&usqp=CAU"
          alt="album art"
          className="art"
        />
        <div className="info">
          <h1>The Beatles</h1>
          <p>Elanor Rigby</p>
        </div>
        <div className="prog">
          <div className="prog-time">
            <p className="left">0:00</p>
            <p className="right">2:06</p>
          </div>
          <div className="prog-bar">
            <div className="prog-bar-inner"></div>
          </div>
        </div>
        <ul className="buttons">
          <a href="#" className="button button-sm">
            <i className="fas fa-random fa-sm" aria-hidden="true"></i>
            <span className="sr-only">Shuffle</span>
          </a>
          <a href="#" className="button button-md">
            <i className="fas fa-step-backward" aria-hidden="true"></i>
            <span className="sr-only">Previous Music</span>
          </a>
          <a href="#" className="button button-lg">
            <i className="fas fa-pause fa-lg" aria-hidden="true"></i>
            <span className="sr-only">Pause</span>
          </a>
          <a href="#" className="button button-md">
            <i className="fas fa-step-forward"></i>
            <span className="sr-only">Next Music</span>
          </a>
          <a href="#" className="button button-sm">
            <i className="fas fa-circle-notch fa-sm" aria-hidden="true"></i>
            <span className="sr-only">Repeat Song</span>
          </a>
        </ul>
        <div className="bar"></div>
      </main>

      <section className="credit">
        Inspired by{" "}
        <a href="https://dribbble.com/shots/9168665-Neumorphism-Music-App">
          Antonio Hristovski
        </a>
        's Dribble layout. Built by{" "}
        <a href="https://twitter.com/TutulDevs">Tutul</a>.
      </section>

      <script
        src="https://kit.fontawesome.com/7d35781f0a.js"
        crossorigin="anonymous"
      ></script>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
        rel="stylesheet"
      />
    </div>
  );
};

export default Home;
