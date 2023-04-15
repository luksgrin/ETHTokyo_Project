import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { useState } from "react";

const clients: { [chain: string]: any} = {};

export const useLitClient = ({chain}: { chain: string}) => {
    const [_client, setClient] = useState(null);
    if (clients[chain]) return clients[chain];

    const client = new LitJsSdk.LitNodeClient({});
    client.connect().then((client) => setClient(client));

    return _client;

}