const express = require("express");
const app = express();
const PUERTO = process.env.PORT || 3001;
const cors = require("cors");
const { routeEncriptar } = require("./routes/encriptar");
const { boomHandle } = require("./middleware/boomHandle");

app.use(cors());
app.use(express.json());
app.use("/api/v1/proceso", routeEncriptar);
app.use(boomHandle);

app.get("/", (req, res)=>{
    res.json({message:"Bienvenido a mi api :)"});
});

app.listen(PUERTO);