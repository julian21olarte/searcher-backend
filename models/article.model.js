'use strict';

module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    name: DataTypes.STRING
  });

  Article.associate = function(models) {
    console.log('va a asociar article');
    Article.belongsTo(models.Brand, {
      foreignKey: 'brand_id'
    });
  }


  return Article;
};