import app from './app';

const PORT = 3002;

app.listen(PORT, () => {
  console.info('Express server listening on port ' + PORT);
});
