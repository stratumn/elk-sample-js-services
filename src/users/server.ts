import app from './app';
import { PORT } from './const';

app.listen(PORT, () => {
  console.info('Express server listening on port ' + PORT);
});
