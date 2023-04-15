import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { useState } from "react";
import { useProvider } from "wagmi";

const clients: { [chain: string]: any} = {};

export const useLitClient = ({chain}: { chain: string}) => {
    const provider = useProvider({chainId: chain == 'ethereum' ? 1 : 1});
    const [_client, setClient] = useState<LitJsSdk.LitNodeClient | null>(null);
    if (clients[chain]) return clients[chain];

    const client = new LitJsSdk.LitNodeClient({provider});
    clients[chain] = client;
    client.connect().then((client: LitJsSdk.LitNodeClient) => setClient(client));

    return _client;

}