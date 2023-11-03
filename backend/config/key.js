const Sequelize = require("sequelize")

console.log(process.env.MYSQL_HOST)
const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host:process.env.MYSQL_HOST,
    port : process.env.MYSQL_PORT,
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