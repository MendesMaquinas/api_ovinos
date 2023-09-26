const db = require("../models/index");
const Ovinos = db.Ovinos;


const getAll = async () => {
    try {
      let registros = await Ovinos.findAll({
        order: [["id", "DESC"]],
        raw: true,
      });
      return registros;
    } catch (error) {
      console.error("Erro ao buscar registros:", error);
      throw new Error(error);
    }
  };

  const getByPk = async (id) => {
    try {
      let registro = await Ovinos.findByPk(id, {
        raw: true,
      });
      return registro;
    } catch (error) {
      console.error("Erro ao buscar registro:", error);
      throw new Error(error);
    }
  };

  const create = async (ovino) => {
    try {
      let operacao = await Ovinos.create(ovino,{raw: true});
      return operacao;
    } catch (error) {
      console.error("Erro ao criar registro: ", error);
      throw new Error(error);
    }
  };

  const destroy = async (id) => {
    try {
      let operacao = await Ovinos.destroy({
        where: {
          id: id,
        }
      });
      return operacao;
    } catch (error) {
      console.error("Erro ao criar registro: ", error);
      throw new Error(error);
    }
  };

  module.exports = {
    getAll,
    getByPk,
    create,
    destroy,
  }
