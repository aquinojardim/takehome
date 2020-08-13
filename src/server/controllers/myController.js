const Models = require('../models/myModels');
const path = require('path');

const myController = {};

// retrive all content of database, them respond with an object containg the order of insertion on the database as keys and the models objects as values
myController.getInfo = (req, res, next) => {
  Models.find({}).exec()
  .then(arr => {
    res.locals.data= arr;
    return next()
  })
  .catch(err => {
    console.log('New info fail on get')
      return next({
        log: "Error in get info",
        message: { error: `This is an error ${err}` },
      });
  })
}

// retrive item from the request body and save it to the database, them respond with the id created on the database 
myController.postInfo = (req, res, next) => {
  (req, res, next) => {
    const { item } = req.body;
    Models.create({item})
    .then(data => {
      res.locals.data = {
        _id: data._id,
        item: data.item,
      };
      return next();
    })
    .catch(err => {
      console.log('New info fail on save')
        return next({
          log: "Error in post info",
          message: { error: `This is an error ${err}` },
        });
    })
  }
}

// retrive task id from the request params and search it on the database and delete, them respond with an object containg all the history about the deleted model.
myController.deleteInfo = (req, res, next) => {
  const _id = req.params.id;
  Models.findOneAndDelete({ _id }).exec()
  .then(data => {
    res.locals.data = data;
    return next();
  })
  .catch(err => {
    console.log('New info fail on delete')
    return next({
      log: "Error in delete info",
      message: { error: `This is an error ${err}` },
    });
  })
}

module.exports = myController;
