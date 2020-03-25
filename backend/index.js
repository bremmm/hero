const express = require('express');

const app = express();
app.use(express.json())


app.get ('/',(req,res) => {
    return res.json({
        evento: 'semana omni',
        aluno: 'jose'
    });
})

app.listen(3333);