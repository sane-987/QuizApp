const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())
app.use("/", require("./routes/users"))

app.use("/admin", require("./routes/admin"))



app.listen(5000, () => {
    console.log("server started at 5000")
})