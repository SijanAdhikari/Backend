import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";


const yourUsername = "sijan";
const yourPassword = "sijan123@";
const yourAPIKey = "05d29f38-ebc2-408b-80fe-e897e471317d";
const yourBearerToken = "9d5f07d2-30b5-40ae-9571-43a2b3eece82";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

  
app.get("/noauth", async(req, res) => {
  try{
    const result = await axios.get(API_URL + "random");
    res.render("index.ejs", {content:JSON.stringify(result.data)});
  }catch(error){
    res.status(404).send(error.message);
  }
 });

 
app.get("/basicauth",async(req,res)=>{
  try{
    const result = await axios.get(API_URL + "all?page=2",{
      auth:{
      username: yourUsername,
      password: yourPassword,
      },
    });
    res.render("index.ejs", {content:JSON.stringify(result.data)});
  }catch(error){
    res.status(404).send(error.message);
  }
 });

app.get("/apiKey", async(req, res) => {
  try{
    const result = await axios.get(API_URL +"filter",{
      params:{
        score:5  ,
        apikey:yourAPIKey,
      },
    });
      res.render("index.ejs",{content:JSON.stringify(result.data)})
  }catch(error){
    res.status(404).send(error.message);
  }

 
});

app.get("/bearerToken", async(req, res) => {
  try{
    const result = await axios.get(API_URL + "secrets/5",{
      headers:{
        Authorization: `Bearer ${yourBearerToken}`
      },

    })
    res.render("index.ejs",{content: JSON.stringify(result.data)});
  }catch(error){
    res.status(404).send(error.message);
  }

  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
