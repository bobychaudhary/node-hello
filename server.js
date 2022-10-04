// import express from 'express'
const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()
 
app.get('/', (request, Response) => {
  return Response.json({
    data: {
      message: 'Hello there!',
    },
  })
})

app.listen(PORT, () =>console.log(`App running on port ${PORT}`))
