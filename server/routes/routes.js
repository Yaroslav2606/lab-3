const express = require('express')
const router = express.Router()
const bcrypt = require("bcrypt");
const objectId = require("mongodb").ObjectID;
const jwt = require("jsonwebtoken")

const {
    menu,
    getMenu
} = require("../utils/method");




router.post('/menu',async (req,res)=>{
    await menu(req,"menu", res);
})

router.get('/getMenu',async (req,res)=>{
    await getMenu(req,"menu", res);
})
router.delete('/deleteMenu/:id',function(req,res){
    const id =new objectId(req.params.id);
    const collection = req.app.locals.collection;
    collection.findOneAndDelete({_id: id}, function(err, result){         
        if(err) return console.log(err);    
        let user = result.value;
        res.send(user);
    });
})
module.exports = router