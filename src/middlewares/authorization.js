const { verify } = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = function (req, res, next) {
  const token = req.headers["token"];

  if (!token) return res.status(401).send(["Token inválido. :("]);

  verify(token, process.env.SECRET, (err, decoded) => {
    if (err) return res.status(401).send(["Token inválido."]);

    req.usuario_id = decoded.indexOf;
    next();
  });
};

module.exports = verifyJWT;
