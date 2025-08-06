require('dotenv').config()
console.log(process.env)

const express = require('express')
const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening port ${port}`)
})

app.get('/instagram',(req,res)=>{
  res.send('instagramdotcom')
})
// app.listen(port,()=>{
//   console.log(`Instagram link app listening on port ${port}`)
// })

app.get('/login',(req,res)=>{
  res.send("<h1> Please login at Amina's website </h1>")
})
