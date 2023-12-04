const { validationResult } = require("express-validator");
const service = require("../services/ovinos.service");

const createError = require("http-errors");

const findAll = async function (req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw createError(422, { errors: errors.array() });
    }

    const response = await service.getAll();

    res.send(response);
  } catch (err) {
    next(err);
  }
};

const findByPk = async function (req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw createError(422, { errors: errors.array() });
    }

    const response = await service.findByPk(req.params.id);

    res.send(response);
  } catch (err) {
    next(err);
  }
};

const create = async function (req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw createError(422, { errors: errors.array() });
    }

    const response = await service.criar(req.body);

    res.send(response);
  } catch (err) {
    next(err);
  }
};

const update = async function (req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw createError(422, { errors: errors.array() });
    }

    const response = await service.update(req.body);
    res.send(response);
  } catch (err) {
    next(err);
  }
};

const deleta = async function (req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw createError(422, { errors: errors.array() });
    }

    const response = await service.deleta(req.params.id);
    res.send(response);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  findAll,
  findByPk,
  create,
  update,
  deleta,
};
