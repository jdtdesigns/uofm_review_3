const { Sequelize } = require('sequelize');
const is_on_heroku = process.env.HEROKU_NAME; // undefined

const connection = new Sequelize(is_on_heroku ? 'asdklfjliwerfkjaldfkjalsdkjfaldsf' : 'many_playground', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

module.exports = connection;