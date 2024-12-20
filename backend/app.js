const express = require('express');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
const PORT = 3000;
const apiPrefix = '/api/v1';

app.use(express.json());

app.use(apiPrefix, dataRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
