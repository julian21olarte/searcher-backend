'use strict';

const brandModel = require('../models').Brand;
const articleModel = require('../models').Article;


function getList(text) {
  let words = text.split('_');
  let wordsJoin = words.join(' ');
  console.log(words);
  return brandModel.findAll({include: {
    model: articleModel,
    as: 'articles'
  }})
  .then(brands => {
    return brands.map(brand => {
      brand = brand.dataValues;
      let articles = brand.articles.filter(article => {
        article = article.dataValues;
        let arrayText = [brand.name, ...article.name.split(' ')];
        return words.some(word => arrayText.includes(word))
      });
      brand.articles = articles;
      if(wordsJoin.includes(brand.name)) {
        brand.active = true;
      }
      return brand;
    })
    .filter(brand => brand.articles.length);
  });
}


module.exports = {
  getList
}