// import express from 'express'
// import {dirname} from 'path'
// import {fileURLToPath} from 'url'

// const app = express()
// const __dirname = dirname(fileURLToPath(import.meta.url))

// app.get('/', (req, res) => {
//     res.sendFile('./static/index.html', { root: __dirname })
// })

// app.listen(3000)
// console.log(`server on port ${3000}`);

const express = require('express')
const path = require('path')

const app = express()
const direccion = path.dirname(require.main.filename);

app.get('/', (req, res) => {
    res.sendFile(path.join(direccion, 'static', 'index.html'))
})

app.listen(3000)
console.log(`server on port ${3000}`);