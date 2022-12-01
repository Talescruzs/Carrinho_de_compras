const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "banco"
})
app.use(cors());
app.use(express.json());

app.get("/getItens", (req, res) =>{
    let a = 
        "select * from produtos";
        db.query(a, (err, result) => {
            if(err){
                res.send(err);
            }else{
                res.send(result);
            }
        })
});
app.get("/getSum", (req, res) =>{
    let b = 
        "SELECT SUM(valor) AS 'Total' FROM produtos";
        db.query(b, (err, result) => {
            if(err){
                res.send(err);
            }else{
                res.send(result);
            }
        })
});

app.listen(3001, () => {
    console.log("rodando");
});