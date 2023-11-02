const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserScore', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    testid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Tests',
        key: 'testid'
      }
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'UserScore',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "testid",
        using: "BTREE",
        fields: [
          { name: "testid" },
        ]
      },
    ]
  });
};
