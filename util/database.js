const {Sequelize} = require('sequelize');

//Enter your database password to create database connection pool.
const sequelize = new Sequelize('node-complete','root','<#ENTER_YOUR_DATABASE_PASSWORD>',{
    dialect : 'mysql',
    host : 'localhost'
});

module.exports = sequelize;
