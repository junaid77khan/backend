require('dotenv').config()
const express = require('express')
// import express from "express";
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/insta', (req, res) => {
    res.send("iamjk7")
})

app.get('/login', (req, res) => {
    res.send("<h1>Login page</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})