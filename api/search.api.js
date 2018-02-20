'use strict';
const searchService = require('../services/search.service');


function getList(req, res) {
  let text = req.params.text;
  searchService.getList(text)
  .then(list => {
      return res.status(200).send(list);
  });
}

module.exports = {
  getList
}