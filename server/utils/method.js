const express = require('express')
const router = express.Router()
const objectId = require("mongodb").ObjectID;

const menu = async (request, role, response) => {
  const collection = request.app.locals.collection;
    const data = {
        role:role,
        nameKitchen:request.body.nameKitchen,
        saladName:request.body.saladName,
        Snack:request.body.Snack,
        firstCourse:request.body.firstCourse,
        secondCourse:request.body.secondCourse,
        Dessert:request.body.Dessert,
        date:new Date().toLocaleString('uk-UA')
        
    }
    collection.insertOne(data,function (err,result){
      if(err){
        console.log(err);
        response.sendStatus(500);
      }
      response.sendStatus(200)
    });
};

const getMenu = async (req, role, res) => {
  const collection = req.app.locals.collection;
  collection.find({role:role},{ _id: 0 }).toArray()
  .then(menu => {
      res.send({
          menu
      })
  });
}
module.exports = {
  menu,
  getMenu
};
