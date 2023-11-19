import { DataverseConnector, SYSTEM_CALL, RESOURCE } from '@dataverse/dataverse-connector';
import * as React from 'react';
import config from '../dataverse.config';



const dataverseConnector = new DataverseConnector;

const appId = config.slug;
 
const Capability = async () => {
  try {
    const pkh = await dataverseConnector.runOS({
      method: SYSTEM_CALL.createCapability,
      params: {
        appId,
        resource: RESOURCE.CERAMIC,        
      },
    });
    return pkh;
  } catch(error) {
    console.error(error);
  }
};

export default Capability;
