import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { useState } from "react";

export const useAuthSig = () => {
    const [sig, setSig] = useState<any>(null);
    if (!sig) LitJsSdk.checkAndSignAuthMessage({ chain: "ethereum" }).then((msg) => setSig(msg));
    return sig;
}   

