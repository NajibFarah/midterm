/*
 * All routes for Confirmation are defined here
 * Since this file is loaded in server.js into /confirmation,
 *   these routes are mounted onto /confirmation
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

module.exports = (database) => {
  router.get("/:id", (req, res) => {
    database.getOrderWithId(req.params.id)
      .then(order => {
        res.render('cart/confirmation', { order, ...req.defaultVars })
      })
  });
  return router;
};
