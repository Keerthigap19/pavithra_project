const express=require("express");
const mysql=require('mysql');
const cors=require('cors');
const app=express();
app.use(express.json());
app.use(cors());


const  db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test",
})
app.post('/login', (req,res)=>{
    const sql="INSERT INTO login(name,email,password) VALUES(?)";
    const values=[
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql,[values], (err, data)=>{
        if (err){
            return res.json("Error");
        }
   
    return res.json(data);
})
})
app.post('/userlogin', (req,res)=>{
    const sqll="SELECT * FROM login  WHERE email = ? AND password = ?";
    db.query(sqll,[req.body.email,req.body.password], (err, data)=>{
        if (err){
            return res.json("Error");
        }
   
   if(data.length>0){
    return res.json("Success");
   }
   else{
    return res.json("Fail");
   }
})
})
app.post('/adminlogin', (req,res)=>{
    const sqll="SELECT * FROM adminlogin  WHERE email = ? AND password = ?";
    db.query(sqll,[req.body.email,req.body.password], (err, data)=>{
        if (err){
            return res.json("Error");
        }
   
   if(data.length>0){
    return res.json("Success");
   }
   else{
    return res.json("Fail");
   }
})
})
app.post('/addproduct', (req,res)=>{
    const sql="INSERT INTO products(id,name,category,image,new_price,old_price) VALUES(?)";
    const values=[
        req.body.id,
        req.body.name,
        req.body.category,
        req.body.image,
        req.body.new_price,
        req.body.old_price
    ]
    db.query(sql,[values], (err, data)=>{
        if (err){
            return res.json("Error");
        }
   
    return res.json(data);
})
})


app.listen(8081, ()=>{
    console.log('listening');
})