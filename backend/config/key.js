const Sequelize = require("sequelize")


const sequelize = new Sequelize("QuizApp", "root", "root", {
    host:"127.0.0.1",
    port : "3306",
    dialect : "mysql",
    pool : {
        max : 5,
        min : 0,
        acquire : 30000,
        idle : 10000
    }
})

sequelize.authenticate()
.then(() => {
    console.log("Connection successfull")
})
.catch((err) => {
    console.log("Error connecting to Database")
})

module.exports = sequelize