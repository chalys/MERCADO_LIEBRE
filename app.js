const express = requiere('express');
const app = express();
const path = require('path');
const port = 3030;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.listen(port, ()=>console.log(`http://localhost${port}`))