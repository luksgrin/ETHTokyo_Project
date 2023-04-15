import * as LitJsSdk from "@lit-protocol/lit-node-client";

export const useAuthSig = () => {
    const authSig = LitJsSdk.checkAndSignAuthMessage({ chain: "ethereum" }).then((msg) => console.log(msg));

}   

