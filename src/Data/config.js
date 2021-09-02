require('dotenv').config({path:"./src/Data/.env"});

module.exports = {
    prefix: '+',
    token: process.env.TOKEN
  };