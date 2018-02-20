'use strict';

module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define('Brand', {
    name: DataTypes.STRING
  });

  Brand.associate = function(models) {
    console.log('va a asociar brand');
    Brand.hasMany(models.Article, {
      foreignKey: 'brand_id',
      as: 'articles'
    });
  }

  return Brand;
};