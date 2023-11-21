import React, { useState } from 'react';
/** Import Dataverse Connector SDK and types */
import {  DataverseConnector } from "@dataverse/dataverse-connector";
 

/**
 * Initialize the Dataverse Connector
 */
const dataverseConnector: DataverseConnector = new DataverseConnector();

enum WALLET {
  METAMASK = "MetaMask",
  WALLETCONNECT = "WalletConnect",
  COINBASE = "Coinbase",
  PARTICLE = "Particle"
}

 
const App: React.FC = () => {
  const [WALLET, setWallet] = useState<WALLET>();


  const connectWallet = async (walletToUse?: WALLET) => {
    try {
      const res = await dataverseConnector.connectWallet();
      setWallet(res.wallet);
      return(res.address);
    } catch (error) {
      console.error(error);
    }
  };
 
  return (
    <button onClick={() => connectWallet(WALLET)}>
      Connect Wallet
    </button>
  );
};
 
export default App;



