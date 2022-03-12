const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const filePath = path.join(__dirname, '../dist')

app.use(express.static(filePath))

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});