import { DataverseConnector, SYSTEM_CALL, RESOURCE } from '@dataverse/dataverse-connector';
import * as React from 'react';


const dataverseConnector = new DataverseConnector;

const appId = 
const wallet = COINBASE;
 
const createCapability = async () => {
  try {
    const pkh = await dataverseConnector.runOS({
      method: SYSTEM_CALL.createCapability,
      params: {
        appId,
        resource: RESOURCE.CERAMIC,
        wallet,
      },
    });
    return pkh;
  } catch(error) {
    console.error(error);
  }
};

