const ovinosRepository = require("../repositories/ovino.repository");
const createError = require("http-errors");

const repository = require("../repositories/ovino.repository")

const getAll = async function () {
    const ovinos = await repository.getAll();
    return ovinos;
}

const findByPk = async function (id) {
    const ovino = await repository.getByPk(id);
    if (!ovino) {
        return createError(404, "Ovino não encontrado.");
    }
    return ovino;
}

const criar = async function (ovino) {
    const ovinoCriado = await repository.create(ovino);
    return ovinoCriado;
}

const update = async function (ovino) {

    const ovinoCriado = await repository.findByPk(ovino.id);

    if(!ovinoCriado) {
        return createError(404, "Id informado não corresponde a nenhum registro cadastrado.");
    }

    await repository.update(ovino);
    return await repository.findByPk(ovino.id);

}
const deleta = async function (id) {
    const ovinoCriado = await repository.findByPk(id);

    if(!ovinoCriado) {
        return createError(404, "Id informado não corresponde a nenhum registro cadastrado.");
    }

    await repository.deleta(id);
    return ovinoCriado;
}

module.exports = {
    getAll,
    findByPk,
    criar,
    update,
    deleta
}