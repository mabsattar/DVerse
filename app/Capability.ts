import { RESOURCE } from '@dataverse/dataverse-connector';
const app = 'dverse';
 
const createCapability = async () => {
  const pkh = await dataverseConnector.runOS({
    method: SYSTEM_CALL.createCapability,
    params: {
      appId,
      resource: RESOURCE.CERAMIC,
      wallet,
    },
  });
  return pkh;
};

