
const boom = require("@hapi/boom");
const joi = require("joi");
const mensaje = joi.string().min(1);
const mandarValidar = joi.object({
    mensaje:mensaje.required()
});
function validatorHandler(schema, property) {
  return (req, res, next) => {
    const cuerpo = req[property];
    const { error } = schema.validate(cuerpo, { abortEarly: false });
    if(!!error){
        throw boom.badRequest(error);
    }
    next();
  };
}

module.exports = {
  validatorHandler,
  mandarValidar
};