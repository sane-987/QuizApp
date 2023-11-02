const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Tests', {
    testid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    testtype: {
      type: DataTypes.ENUM('marathi','english','hindi'),
      allowNull: true
    },
    testscore: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Tests',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "testid" },
        ]
      },
    ]
  });
};
