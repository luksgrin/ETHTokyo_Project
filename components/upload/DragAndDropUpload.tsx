import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useLitClient } from "../../hooks/useLitClient";
import { LitNodeClient } from "@lit-protocol/lit-node-client";
import * as LitJsSdk from "@lit-protocol/lit-node-client";

const fileTypes = ["MP3"];

function DragDrop({authSig}: {authSig: any}) {

  const [file, setFile] = useState(null);

  const client: LitNodeClient = useLitClient({chain: 'ethereum'});

  const getBase64 = (file: any, cb: (result: any) => any) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
  }

  const encrypt = async (authSig: any, accessControlConditions: any, chain: string, payload: string, client: any) => {
    const ipfsCid = await LitJsSdk.encryptToIpfs({
      authSig,
      accessControlConditions,
      chain,
      string: payload,
      //   file, // If you want to encrypt a file instead of a string
      litNodeClient: client,
      infuraId: '2OSW6KMJbYSYmgjQud13A1VjVIq',
      infuraSecretKey: '2113e94dfc9ef99a61b613ca1a74a872',
    });
    return ipfsCid;
  }

  const handleChange = (file: React.SetStateAction<null>) => {
    setFile(file);
    getBase64(file, async (base64encoded) => {
        const ipfsCid = await encrypt(authSig, acc('ethereum'), 'ethereum', base64encoded, client);
        console.log({file, base64encoded, ipfsCid});
    })
  };
  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
  );
}

export const acc =  (chain: string) => [{
        contractAddress: '',
        standardContractType: '',
        chain: chain,
        method: 'eth_getBalance',
        parameters: [':userAddress', 'latest'],
        returnValueTest: {
        comparator: '>=',
        value: '0',
        },
    },];

export default DragDrop;
