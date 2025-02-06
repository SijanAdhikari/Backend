import express from "express";
const app=express();
const port = 2500;

app.get("/",(req,res)=>{
    res.send("<h1>HELLO SIJAN</h1>");
})

app.get("/about",(req,res)=>{
    res.send("<h1>About Me</h1><p>Hello I'm Sijan</p>");
});

app.get("/contacts",(req,res)=>{
    res.send("<h1>Contacts</h1><p>Phone: 9745450328</p>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
  });
  