const mongoose = require('mongoose');
const Goblin = require('../models/_goblinModel');
const War = require('../models/_warModel');


//Functions
//---------------------------------------------------------------------------------


exports.creatGoblin = async (req, res, next) => {
  try {
    const gname = req.params.gname;
    let goblin = new Goblin({
      name: gname,
      age: 50
    });
    goblin.save(function (err) {
      if (err) return handleError(err);
      res.json({
        message:"You made a goblin!"
      });
    });
  } catch (error) {
    next(error)
  }
}

exports.createWar = async (req, res, next) => {
  try {
    const wname = req.params.wname;
    const mywar = new War({
      title: wname
    });
    mywar.save(function (err) {
      if (err) return handleError(err);
      res.json({
        message: "success"
      });
    });
  } catch (error) {
    next(error)
  }
}

exports.enlistGoblinToWar = async (req, res, next) => {
  try {
    const gname = req.query.gname;
    const wname = req.query.wname;
    console.log("goblin:"+gname);
    console.log("war:"+wname);
    let goblinID = mongoose.Types.ObjectId(gname);
    //War.update({ _id: wname }, {$push:{'goblins':{'_id':gname}}},
    War.update({ _id: wname }, {$push:{'goblins':goblinID}},
    function(err, result) {
      if (err) return handleError(err);
      console.log(result);
      res.json({
        message:"success!"
      });
    });
  } catch (error) {
    next(error)
  }
}

exports.listGoblins = async (req, res, next) => {
  const goblins = await Goblin.find({});
  res.status(200).json({
    data: goblins
  });
}

exports.listWars = async (req, res, next) => {
  //const wars = await War.find({}).populate({path: 'goblins'});
  //const wars = await War.find({}).populate({path: 'goblins',match: doc => ({ age:50})}); // matching or filters applied to population
  //const wars = await War.find({},'name').populate({path: 'goblins'}); // matching or filters
  //const wars = await War.find({},'name').populate({path: 'goblins', match:{'name': 'jeff'}}); // matching or filters population results
  const wars = await War.find({},'name').populate({path: 'goblins', match:{'name': 'jeff'}, select:'name'}); // matching or filters population results and select filters result
  res.status(200).json({
    data: wars
  });

