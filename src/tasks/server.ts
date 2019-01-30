import { agent } from './apm';
console.info(`APM Agent started: ${agent.isStarted()}`);

import app from './app';
import { PORT } from './const';

app.listen(PORT, () => {
  console.info('Express server listening on port ' + PORT);
});
