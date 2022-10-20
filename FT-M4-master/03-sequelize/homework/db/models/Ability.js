const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Ability', {
    name:{
      type:DataTypes.STRING,
      allowNull:false,
      unique: true,
    },

    description:{
      type:DataTypes.STRING(1000),
    },

    mana_cost:{
      type:DataTypes.FLOAT,
      allowNull:false,
      unique: true,
    },
  })
}