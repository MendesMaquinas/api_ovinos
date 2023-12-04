const { Pesos } = require("../database/models/index");

const getAll = async () => {
  let registros = await Pesos.findAll({
    order: [["id", "DESC"]],
    raw: true,
  });
  return registros;
};

module.exports = {
  getAll,
};
