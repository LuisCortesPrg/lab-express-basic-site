const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send('Hello uri')
})



app.get("/home",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html")

})

app.get("/about",(req, res)=>{
    res.sendFile(__dirname + "/views/indexabout.html")
})

app.get("/work",(req,res)=>{
    res.sendFile(__dirname + "/views/indexworks.html")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)})

