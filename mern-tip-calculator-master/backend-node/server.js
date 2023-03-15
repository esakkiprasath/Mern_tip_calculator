// const express = require('express')
// const mongoose = require('mongoose')

import express from 'express'
// import mongoose from 'mongoose'
import cors from 'cors'


// app config
const app = express()
// const port = process.env.PORT || 9000
const port = 9000

// middlewares
app.use(express.json())
app.use(cors())

// api routes
app.get('/', (req, res) => {
  res.status(200).send('hello world')
  })

app.post('/api/v1/calculatetip', (req, res) => {
  const amount = parseInt(req.body.amount)
  const tip = parseInt(req.body.tip)

  const toBePaid = amount + (tip/100) * amount

  res.status(200).json({toBePaid})

  })

// listener
app.listen(port, ()=> console.log(`listening on localhost:${port}`))

// {
//   "amount" : "234567",
//   "tip" : "15"
// }
