const express = require('express')
const app = express()
const port = 3000



const moongoose = require('mongoose')
moongoose.connect('mongodb+srv://cky:cky@bolierplate.51scy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=> console.log('몽고디비 연결중'))
.catch(err => console.log('errrrrr'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})