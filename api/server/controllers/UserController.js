const db = require('../src/config/db.config');
const User = db.User;

exports.getSingleUser = (req, res) => {
  User.findByPk(req.params.id,
    {attributes:['id', 'firstname', 'createdAt']})
    .then(user=>res.status(200).json(user))
    .catch(error => {
      console.log(error)
      
      res.status(500).json({
        message:'Error!',
        error:error,
      });
    })
}

exports.getUsers = (req, res) => {
  try{
    User.findAll({attributes: ['id', 'firstname', 'createdAt']}).then(users => {
      res.status(200).json(users)
    })
  } catch (error){
    console.log(error);
    res.status(500).json({
      message:'Error!',
      error:error
    })
  }
}

exports.createUser = (req, res) => {
  let user = {};

  try{
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.password = req.body.password;
    user.createdAt = Date.now();

    User.create(user,
      {attributes: ['id', 'firstname', 'password', 'createdAt']}).then(result => {
        res.status(200).json(result)
      });
  } catch(error) {
    res.status(500).json({
      message: 'Fail!',
      error:error.message
    })
  }
}