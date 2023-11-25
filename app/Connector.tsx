"use client";

import { WALLET } from "@dataverse/dataverse-connector";
import React, { useState, useEffect } from 'react';
/** Import Dataverse Connector SDK and types */
import {  DataverseConnector } from "@dataverse/dataverse-connector";
import CapabilityComponent from './Capability';
/**
 * Initialize the Dataverse Connector
 */
const dataverseConnector: DataverseConnector = new DataverseConnector();

enum WALLET {
  METAMASK = "MetaMask",
  WALLETCONNECT = "WalletConnect",
  COINBASE = "Coinbase",
  PARTICLE = "Particle",
  EXTERNAL_WALLET = "ExternalWallet",
}


function Connector() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadStream = async () => {
      const dataverseConnector = new DataverseConnector();
      const streamId = 'your-stream-id'; // replace with your stream ID

      const result = await dataverseConnector.runOS({
        method: SYSTEM_CALL.loadStream,
        params: streamId,
      });

      setData(result);
    };

    loadStream();
  }, []);



const connectWallet = async (walletToUse?: WALLET) => {
  try {
    const res = await dataverseConnector.connectWallet();
    setWallet(res.wallet);
    return(res.address);
  } catch (error) {
    console.error(error);
  }
};


useEffect(() => {
  const loadStream = async () => {
    const dataverseConnector = new DataverseConnector();
    const streamId = 'your-stream-id'; // replace with your stream ID

    const result = await dataverseConnector.runOS({
      method: SYSTEM_CALL.loadStream,
      params: streamId,
    });

    setData(result);
  };

  loadStream();
}, []);
 
  return (
    <button onClick={() => connectWallet(WALLET)}>
      Connect Wallet
    </button>
  );
};
 
export default Connector;



