import express from 'express';
const app = express()

const port = 3001
app.get('/api/notification/add', (req,res)=>{
    res.json({
        Name : "Hanif"
    })
    console.log("Nice endpoint");
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })