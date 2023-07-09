const express = require('express');
const cors    = require('cors');
const app     = express();
app.use(cors());

app.get("/api/data" , (req,res) => {
  res.send("I like pranathi..")
})

app.listen(3000 , () => {
    console.log("server listening on port 3000")
})