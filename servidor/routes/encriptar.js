const express = require("express");
const { ServicioEncriptar } = require("../services/serviceEncriptado");
const { validatorHandler, mandarValidar } = require("../middleware/joiHandle");
const routeEncriptar = express.Router();
const servicio = new ServicioEncriptar();

routeEncriptar.get("/", async(req, res)=>{
    res.json({"message":"yo soy el router"});
});

routeEncriptar.post("/encriptar",validatorHandler(mandarValidar, "body") ,async (req, res, next)=>{
    const {headers, body} = req;
        try {
            const data = await servicio.encriptar(headers, body);
            res.json(data);
        } catch (error) {
            next(error);
        }
});

routeEncriptar.post("/desencriptar",validatorHandler(mandarValidar, "body") ,async (req, res, next)=>{
    const {headers, body} = req;
        try {
            const data = await servicio.desencriptar(headers, body);
            res.json(data);
        } catch (error) {
            next(error);
        }
});

module.exports={routeEncriptar}