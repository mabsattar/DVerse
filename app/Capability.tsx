import { DataverseConnector, SYSTEM_CALL, RESOURCE } from '@dataverse/dataverse-connector';
import React, { useEffect, useState } from 'react';
import config from '../dataverse.config';

const appId = config.slug;

const CapabilityComponent: React.FC = () => {
  const [dataverseConnector, setDataverseConnector] = useState<DataverseConnector | null>(null);

  useEffect(() => {
    setDataverseConnector(new DataverseConnector());
  }, []);

  useEffect(() => {
    if (dataverseConnector) {
      Capability(dataverseConnector);
    }
  }, [dataverseConnector]);

  return null; // or return some JSX if needed
};

const Capability = async (dataverseConnector: DataverseConnector) => {
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

export default CapabilityComponent;
