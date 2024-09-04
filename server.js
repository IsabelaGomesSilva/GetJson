const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const port = 3300;

const fileUsers = path.join(__dirname, './users.json');
const fileDocuments = path.join(__dirname, './docs.json');

app.use(express.json());


app.get('/users',(req,res) => {
    fs.readFile(fileUsers,'utf-8',(err,data) => {
        if(err){
            res.status(500).send('Erro arquivo de usuários');
            return;
        }
        res.status(200).json(JSON.parse(data));
    });
});

app.get('/docs',(req,res) => {
    fs.readFile(fileDocuments,'utf-8',(err,data) => {
        if(err){
            res.status(500).send('Erro arquivo de documentos');
            return;
        }
        res.status(200).json(JSON.parse(data));
    });
});


app.use((req,res)=>{
    res.status(404).send('404 page not found');
});

app.listen(port, () => {
    console.log(`Server running http://localhost:${port}`);
});
