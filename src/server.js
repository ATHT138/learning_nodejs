import express from 'express';
// const express = require('express');
const app = express();

const localhost = "localhost";
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, localhost, () => {
  console.log(`Server is running on http://${localhost}:${port}`);
});

