import Image from 'next/image'
import Connector from './components/Connector'
import React from 'react';
import CapabilityComponent from './components/Capability'
import {Extension, DataverseConnector} from "@dataverse/dataverse-connector"
import Navbar from "./components/Navbar";

/*interface Context {
  dataverseConnector: DataverseConnector;
}

export const Context = createContext<Context>({} as Context);
const dataverseConnector = new DataverseConnector();
*/

export default function Home() {
  return (
    <div>
      <Connector />
      <CapabilityComponent />
      <Navbar />    
    
    </div>
  )
}
