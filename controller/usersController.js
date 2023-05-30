const {User} = require("../models/index")

function routeWorks(req,res){res.json({message: 'It works'})
}

async function allUsers(req,res){
    try {
        const userData = await User.find()
        res.status(200).json(userData)
    } catch(err){res.status(500).json(err)}
}

async function oneUser(req,res){
    try {
        const userData = await User.findById(req.params._id)
        res.status(200).json(userData)
    } catch(err){res.status(500).json(err)}
}

async function newUser(req,res){
    try {
        const newUser = await User.create(req.body)
        res.status(200).json(newUser)
    } catch(err){res.status(500).json(err)}
}


module.exports = {routeWorks, allUsers, oneUser, newUser}