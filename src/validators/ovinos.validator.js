const { body, param } = require("express-validator");
const { validatorMessage } = require("../utils/errorMessage");

const findByPk = function () {
  return [param("id", validatorMessage("Id")).exists().bail().isInt()];
};
//todo colocar os atributos corretos aq
const criar = function () {
  return [
    body("turno", validatorMessage("Turno")).exists().bail().isInt(),
    body("categoria", validatorMessage("Categoria")).exists().bail().isString(),
    body("valor", validatorMessage("Valor")).exists().bail().isNumeric(),
  ];
};

//todo colocar os atributos corretos aq
const update = function () {
  return [
    body("turno", validatorMessage("Turno")).exists().bail().isInt(),
    body("categoria", validatorMessage("Categoria")).exists().bail().isString(),
    body("valor", validatorMessage("Valor")).exists().bail().isNumeric(),
  ];
};

const deleta = function () {
  return [param("id", validatorMessage("Id")).exists().bail().isInt()];
};

module.exports = {
  findByPk,
  criar,
  update,
  deleta,
};
