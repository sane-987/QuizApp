const express = require("express")
const router = express.Router()

const db = require("../config/key")
const sequelize = require("../config/key")
const bcrypt = require("bcrypt")

const initModels = require("../models/init-models")
const model = initModels(sequelize)

router.post("/dashboard", (req, res) => {
    res.send("showing dashboard")
})


router.post("/login", async(req, res, next) => {
    console.log(req.body.email)
    const user = await model.users.findOne({where : {email : req.body.email}})
    console.log(user["role"])
    if(user){
        const password_valid = await bcrypt.compare(req.body.password, user.password)
        if(password_valid)
            {
                //const accessToken = await signAccessToken(user.id.toString())
                if(user["role"] === "user") {
                    res.status(200).json({
                        message : "login successful",
                        role : user["role"]
                        //token : accessToken
                    })
                }
                else {
                    res.status(200).json({
                        message : "admin login",
                        role : user["role"]
                        //token : accessToken
                    })
                }
                
                console.log("login success")
            }
        else
            res.status(400).json({error:"password is incorrect"})
    }
    else{
        res.status(404).json({ error : "User does not exist" })
        
    }
}
)

router.post("/register", async(req, res, next) => {
    
    const salt = await bcrypt.genSalt(10)

    var usr = {
        username : req.body.username,
        email : req.body.email,
        password : await bcrypt.hash(req.body.password, salt)
    }
    console.log(usr)
    const user = await model.users.findOne({where : {email : usr.email}})
    if (user) {
        res.status(409).send({message:"User already exists"})
        return next()
    }
    let created_user = await model.users.create(usr)
    
    res.status(201).json("User registered successfully")

})

router.post("/getQuestionAnswers", async(req, res) => {
    const testname = req.body.testname

    const testId = await model.Tests.findOne({
        where:{
            testtype : testname
        },
        attributes : ["testid"]
    })
    console.log(testId)
    var quizdata = await model.quiz.findAll({
        where : {
            testid : testId["testid"]
        },
        attributes : ["quizid", "question", "choices"]
    })
    //console.log(quizdata)
    res.send(quizdata)
})


router.post("/submitAnswer", async(req, res, next) => {
    const data = req.body
    const useremail = data.useremail
    const testType = data.testType
    const userChoices = data.userChoices
    const testId = await model.Tests.findOne({
        where : {
            testtype : testType
        },
        attributes : ["testid"]
    })
    console.log(testId)
    const questionsAndChoices = await model.quiz.findAll({
        where : {
            testid : testId["testid"]
        },
        attributes : ["question", "choices", "answer", "points"]
    })
    let choicesArray = []
    let ansArray = []
    let pointsArray = []
    questionsAndChoices.map((ele) => {
        //console.log(ele["question"], ele["choices"])
        choicesArray.push(ele["choices"].split(","))
        ansArray.push(ele["answer"])
        pointsArray.push(ele["points"])
    })
    console.log(choicesArray)
    console.log(ansArray)
    console.log(userChoices)
    const result = []
    choicesArray.map((ele, i) => {
        if (ele[userChoices[i]] === ansArray[i])
            {
                console.log(ele[userChoices[i]],ansArray[i])
                result.push(pointsArray[i])
            }
        else
            result.push(0)
    })
    console.log(result)
    let sum = result.reduce((acc, curr) => {
        return acc + curr
    }, 0)
    console.log(sum)
    //Calculate Points and Update the UserScore DB
    const ifExists = await model.UserScore.findOne({
        where : {
            username : useremail,
            testid : testId["testid"]
        },
        attributes : ["id"]
    })
    console.log(ifExists)
    if (ifExists === null) {
        console.log("true")
        await model.UserScore.upsert({
            //id autoincrementing
            testid : testId["testid"],
            username : useremail,
            score : sum
        })
    }
    else {
        await model.UserScore.upsert({
            id : ifExists["id"],
            testid : testId["testid"],
            username : useremail,
            score : sum
        })
    }
    res.send({
        score : sum
    })
    
    //retrieve possible choices of the given questions


    
})

module.exports = router;