const express = require('express');

const app = express();
const port = 3001;
const router = require('./api/server/routes/UserRoutes');

const db = require('./api/server/src/config/db.config');
const User = db.User;

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Access-Control-Allow-Headers'
  );
  next();
});
app.use('/', router)


const server = app.listen(3001, () => {
  
  let host = server.address().address;
  let port  = server.address().port;
  console.log(`app running on port ${port}, ${host}`);
});


// db.sequelize.sync({force:true}).then(() => {
//   console.log('drop and resync')

//   User.sync().then(()=>{
//     const users = [
//       {firstname:'Jack', lastname:'Smith', password:'asdasd'},
//       {firstname:'Adam', lastname:'Jonhson', password:'asdasd'},
//       {firstname:'Dana', lastname:'Bay', password:'asdasd'},
//     ]

//     for(let i=0; i<users.length; i++){
//       User.create(users[i])
//     }
//   })
// })