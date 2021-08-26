import express from 'express';
const app = express()

const port = 3001
app.get('/api/notification/create', (req,res)=>{
    res.status(200).json({
        Name : "Hanif"
    })
    console.log("Nice endpoint for add new");
});

app.get('/api/notification/update/:id', (req,res)=>{
    var id = req.params
    res.status(200).json(req.params)
    console.log("Nice endpoint for update");
    console.log(id);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })