// import express from 'express'
const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()
 
app.get('/', (request, Response) => {
  return Response.json({
    data: {
      message: 'Hello World',
    },
  })
})

<<<<<<< HEAD
app.listen(PORT, () =>console.log(`App running on port ${PORT}`))
=======
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello 👋 there!\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
>>>>>>> 76e0ca9dff2de9a18f64df0c53c972efc712a06c
