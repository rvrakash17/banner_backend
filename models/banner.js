const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Banner = sequelize.define('Banner', {
  visible: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  description: {
    type: DataTypes.STRING
  },
  timer: {
    type: DataTypes.INTEGER
  },
  link: {
    type: DataTypes.STRING
  }
});

module.exports = Banner;
