var DataTypes = require("sequelize").DataTypes;
var _Tests = require("./Tests");
var _UserScore = require("./UserScore");
var _quiz = require("./quiz");
var _users = require("./users");

function initModels(sequelize) {
  var Tests = _Tests(sequelize, DataTypes);
  var UserScore = _UserScore(sequelize, DataTypes);
  var quiz = _quiz(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  UserScore.belongsTo(Tests, { as: "test", foreignKey: "testid"});
  Tests.hasMany(UserScore, { as: "UserScores", foreignKey: "testid"});
  quiz.belongsTo(Tests, { as: "test", foreignKey: "testid"});
  Tests.hasMany(quiz, { as: "quizzes", foreignKey: "testid"});

  return {
    Tests,
    UserScore,
    quiz,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
