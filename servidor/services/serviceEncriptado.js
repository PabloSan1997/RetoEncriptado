require("dotenv").config();
const boom = require("@hapi/boom");
class ServicioEncriptar {
  constructor() {
    this.datos = JSON.parse(process.env.ENCRI);
    this.permiso = process.env.PERMISO;
  }
  async encriptar(header, body) {
    if (header.entrada === this.permiso) {
      const cadena = body.mensaje.split("");
      const data = this.datos;
      const nuevaCadena = cadena.map((element) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].letra === element) {
            return data[i].cambiar;
          }
        }
        return element;
      });
      return { results: nuevaCadena.join("") };
    }
    throw boom.notAcceptable("No tienes permiso para interactuar con esta api");
  }
  async desencriptar(header, body) {
    if (header.entrada === this.permiso) {
      let texto = body.mensaje;
      const data = this.datos;
      data.forEach((element) => {
        const cadena = texto.split(element.cambiar);
        texto = cadena.join(element.letra);
      });

      return { results: texto };
    }
    throw boom.notAcceptable("No tienes permiso para interactuar con esta api");
  }
}

module.exports = { ServicioEncriptar };
