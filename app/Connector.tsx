"use client";

import React, { useState, useEffect } from 'react';
/** Import Dataverse Connector SDK and types */
import { Extension, DataverseConnector, SYSTEM_CALL, WALLET } from "@dataverse/dataverse-connector";
import CapabilityComponent from './Capability';

/**
 * Initialize the Dataverse Connector
 */
const dataverseConnector: DataverseConnector = new DataverseConnector();


function Connector() {
  const [data, setData] = useState(null);
  const [wallet, setWallet] = useState(null);


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
    if (!wallet) {
      await connectWallet(WALLET.METAMASK)
    }

    const streamId = 'your-stream-id'; // replace with your stream ID

    const result = await dataverseConnector.runOS({
      method: SYSTEM_CALL.loadStream,
      params: streamId,
    });

    setData(result);
  };

  loadStream();
}, [wallet]);
 
  return (
    <button onClick={() => connectWallet(WALLET)}>
      Connect Wallet
    </button>
  );
};
 
export default Connector;



