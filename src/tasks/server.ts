import * as apm from 'elastic-apm-node';
apm.start({
  serviceName: process.env.ELASTIC_APM_SERVICE_NAME || 'task-frontend',
  serverUrl: process.env.ELASTIC_APM_SERVER_URL || 'http://localhost:8200'
});

import app from './app';
import { PORT } from './const';

app.listen(PORT, () => {
  console.info('Express server listening on port ' + PORT);
});
