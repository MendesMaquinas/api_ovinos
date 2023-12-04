const { Ovinos } = require("../database/models/index");

const getAll = async () => {
  let registros = await Ovinos.findAll({
    order: [["id", "DESC"]],
    raw: true,
  });
  return registros;
};

const findByPk = async (id) => {
  let registro = await Ovinos.findByPk(id, {
    raw: true,
  });
  return registro;
};

const create = async (ovino) => {
  let operacao = await Ovinos.create(ovino, { raw: true });
  return operacao;
};

const update = async (ovino) => {
  let operacao = await Ovinos.update(
    {
      brinco: ovino.brinco,
      dtNascimento: ovino.dtNascimento,
      brincoMae: ovino.brincoMae,
      genero: ovino.genero,
    },
    {
      where: {
        id: ovino.id,
      },
    }
  );
  return operacao;
};

const deleta = async (id) => {
  let operacao = await Ovinos.destroy({
    where: {
      id: id,
    },
  });
  return operacao;
};

module.exports = {
  getAll,
  findByPk,
  create,
  update,
  deleta,
};
