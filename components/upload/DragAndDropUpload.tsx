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
        const ipfsCid = await encrypt(authSig, acc('ethereum', 'vitalik.lens', '0xcbc9dd04153508782b444e3255a9663e9a9953ca'), 'ethereum', base64encoded, client);
        console.log({file, base64encoded, ipfsCid});
    })
  };
  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
  );
}

export const acc =  (chain: string, handle: string, followerAddress: string) => [{
        contractAddress: 'QmZazCGM3SbAmzZsL1bg4doyBCbExfeF9DXuFtzBy6eymZ',
        standardContractType: 'LitAction',
        chain: chain,
        method: 'go',
        parameters: [handle, followerAddress],
        returnValueTest: {
          comparator: '=',
          value: 'true',
        },
    },];

export default DragDrop;
