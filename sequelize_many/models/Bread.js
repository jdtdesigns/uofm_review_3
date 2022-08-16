const { DataTypes, Model } = require('sequelize');

class Bread extends Model { }

Bread.init({
  type: {
    type: DataTypes.STRING,
    require: true
  }
}, {
  sequelize: require('../config/connection'),
  modelName: 'bread',
});

module.exports = Bread;