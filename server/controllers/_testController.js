const mongoose = require('mongoose');
const Person = require('../models/_personModel');
const Story = require('../models/_storyModel');

const Goblin = require('../models/_goblinModel');
const War = require('../models/_warModel');


//Functions
//---------------------------------------------------------------------------------


exports.runTest = async (req, res, next) => {
  try {

    let author = new Person({
      _id: new mongoose.Types.ObjectId(),
      name: 'Ian Fleming',
      age: 50
    });

    author.save(function (err) {
      if (err) return handleError(err);
      const story1 = new Story({
        title: 'Casino Royale',
        author: author._id
      });
    
      story1.save(function (err) {
        if (err) return handleError(err);
        res.json({
          message: "success"
        });
      });
    });
  
  } catch (error) {
    next(error)
  }
}

exports.getTest = async (req, res, next) => {
  try {
    Story.findOne({ title: 'Casino Royale' }).
    populate('author').
    exec(function (err, story) {
      if (err) return handleError(err);
      res.json({
        message:story.author
      });
      console.log(story.author);
    });
  } catch (error) {
    next(error)
  }
}


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
  const wars = await War.find({}).populate({path: 'goblins'});
  res.status(200).json({
    data: wars
  });
}

