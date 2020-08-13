const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const apiRouter = require('./routes/api');

// uncomment if need cross origin request
// const cors = require('cors');
// app.use(cors());

// Parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Send main app
app.use('/', express.static(path.resolve(__dirname, '../client/assets')));

app.use('/api', apiRouter);

app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/index.html')));

// Catch-all route handler
app.use('*', (req, res) => {
  return res.sendStatus(404);
});

// Global error handler
app.use((err, req, res, next) => {
  console.log('invoking global error handler');
  const defaultErr = {
    log: 'Express error handler caught unknown middleware',
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
