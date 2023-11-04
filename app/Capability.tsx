import { DataverseConnector, SYSTEM_CALL, RESOURCE } from '@dataverse/dataverse-connector';


const dataverseConnector = new DataverseConnector;

const appId = 
const wallet = 
 
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

