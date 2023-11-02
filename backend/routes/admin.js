const express = require("express")
const router = express.Router()

const sequelize = require("../config/key")
const bcrypt = require("bcrypt")

const initModels = require("../models/init-models")
const model = initModels(sequelize)


router.post("/addQuestionAnswer", async(req, res, next) => {
    
    
    const testId = req.body.testId
    const question = req.body.question
    const choices = req.body.choices.toString()
    const correctAns = req.body.correctAns
    
    const data = {
        testid : testId,
        question : question,
        choices : choices,
        answer : correctAns,
        points : 5
    }
    console.log(req.body)

    let count = await model.quiz.findAll({
        where : {
            testid : testId
        },
        attributes : [
            [sequelize.fn("COUNT", sequelize.col("testid")), "count_testid"]
        ]
    })
    count = JSON.stringify(count)
    count = JSON.parse(count)
    if(count[0]["count_testid"] >= 10)
    {
        res.send("Cannot add more questions! reached limit 10")
    }
    else{
        const addQuestion = await model.quiz.create(data)
        res.send("Question added successfully")
        
    }
})


module.exports = router;