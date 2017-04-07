const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

module.exports = {
  'dbUrl': `mongodb://${process.env.USER_DB}:${process.env.PASSWORD_DB}@ds035046.mlab.com:35046/data_blog`,
}
