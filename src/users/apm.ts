import * as apm from 'elastic-apm-node';

export const agent = apm.start({
  serviceName: process.env.ELASTIC_APM_SERVICE_NAME || 'user-frontend',
  serverUrl: process.env.ELASTIC_APM_SERVER_URL || 'http://localhost:8200'
});
