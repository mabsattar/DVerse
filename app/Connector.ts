import React, { useState } from 'react';
 
/** Import Dataverse Connector SDK and types */
import {
  DataverseConnector,
  WALLET
} from "@dataverse/dataverse-connector";
 
/**
 * Initialize the Dataverse Connector
 */
const dataverseConnector: DataverseConnector = new DataverseConnector();
 
const App: React.FC = () => {
  const [wallet, setWallet] = useState<WALLET>();
 
  const connectWallet = async () => {
    try {
      const res = await dataverseConnector.connectWallet();
      setWallet(res.wallet);
      return(res.address);
    } catch (error) {
      console.error(error);
    }
  };
 
  return (
    <button onClick={connectWallet}>
      Connect Wallet
    </button>
  );
};
 
export default App;

enum WALLET {
  METAMASK = "MetaMask",
  WALLETCONNECT = "WalletConnect",
  COINBASE = "Coinbase",
  PARTICLE = "Particle"
}

