import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
export default function HeroImage() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://imgs.search.brave.com/su7tlGmQXUYI6S4-y6dsIcdTeWCk0ota-QyHqyMCVUY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZhL2U0/LzQ1L2ZhZTQ0NTFm/MWFlNWY2MDJhYjA3/YTNjODdiZDFlNTM4/LmpwZw')",
          height: 400,
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="Hero__ConnectButton">
            <ConnectButton />
          </div>

          <div className="d-flex justify-conteant-center aliagn-items-center h-100 Hero__MainContent">
            <div className="text-white">
              <h1 className="mb-3">Play Protect</h1>
              <h4 className="mb-3">Content Creator Wards</h4>
              {/* <a
                className="btn btn-outline-light btn-lg"
                href="#!"
                role="button"
              >
                Make sure every intelectual propierty is respected
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
