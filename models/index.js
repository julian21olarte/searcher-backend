'use strict';

var fs = require('fs');
var path = require('path');
var basename = path.basename(__filename);
var Sequelize = require('sequelize');
var db = {};

const sequelize = new Sequelize('searcher', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
  pool: {
    max: 50,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });
  

Object.keys(db).forEach(modelName => {
  console.log(modelName);
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }

  if (db[modelName].initialize) {
    db[modelName].initialize();
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;