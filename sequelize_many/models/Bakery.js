const { DataTypes, Model } = require('sequelize');
const Bread = require('./Bread');

class Bakery extends Model { }

Bakery.init({
  name: {
    type: DataTypes.STRING,
    require: true
  }
}, {
  sequelize: require('../config/connection'),
  modelName: 'bakeries',
  freezeTableName: true
});

Bakery.belongsToMany(Bread, {
  through: 'bakery_bread',
  foreignKey: 'bakery_id'
});

Bread.belongsToMany(Bakery, {
  through: 'bakery_bread',
  foreignKey: 'bread_id'
});

module.exports = Bakery;