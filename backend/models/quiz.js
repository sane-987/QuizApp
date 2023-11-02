const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quiz', {
    quizid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement : true,
    },
    testid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Tests',
        key: 'testid'
      }
    },
    question: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    choices: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    answer: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'quiz',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "quizid" },
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
