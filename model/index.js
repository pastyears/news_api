"use strict";
const mysql = require("mysql");
const fs = require("fs");
var path = require('path');
const config = require("../config");
const db = config.db;
const result = config.result;
// 登录接口
exports.login = (req, res, next) => {
  const connect = mysql.createConnection(db);
  const params  = [req.body.username, req.body.password]
  connect.query("select User_name, User_time, User_icon, User_status from user where user_name=? and user_psw=?",
    params, function(err, data){
    if (data && data.length) {
      result.code = "0";
      result.msg = "登录登录成功！";
      result.data = data[0];
    } else {
      result.code = "1";
      result.msg = "用户名或者密码错误！";
      result.data = null;
    }
    res.send(result);
  }) 
  connect.end();
}

exports.list = (req, res, next) => {
  const connect = mysql.createConnection(db);
  const params = [req.query.cate];
  connect.query("select * from news where News_style=?",
    params, function(err, data){
    if (data) {
      result.code = "0";
      result.msg = "获取列表成功！";
      result.data = data;
    } else {
      result.code = "1";
      result.msg = "获取列表失败！";
      result.data = null;
    }
    res.send(result);
  }) 
  connect.end();
}
  
exports.publish = (req, res, next) => {
  const connect = mysql.createConnection(db);
  const detail = req.body.content
  const cover = req.body.cover
  const nowName = `${fileName()}`
  let base64Data = cover.replace(/^data:image\/\w+;base64,/, "");
  base64Data = base64Data.replace(/ /g, "+");
  const dataBuffer = new Buffer(base64Data, 'base64');
  const imageSrc = path.resolve(__dirname, '../public/images') + '/' + nowName + '.png'

  fs.writeFile(imageSrc, dataBuffer, function(err){
    if (!err) {
      console.log("上传封面成功！")
    }
  });
  const params = {
    News_title: req.body.title,
    News_content: nowName,
    News_author: req.body.author,
    News_style: req.body.cate,
    News_images: `/images/${nowName}.png`
  }
  connect.query("insert into news set ?",
  params, function(err, data){
    if (data) {
      writeArticle(nowName, detail, (state) => {
        if (state) {
          result.code = "0";
          result.msg = "文章发布成功！";
          result.data = data;
          res.send(result);
        } else {
          result.code = "1";
          result.msg = "文章发布失败！";
          result.data = null;
          res.send(result);
        }
      })
    } else {
      result.code = "1";
      result.msg = "文章发布失败！";
      result.data = null;
      res.send(result);
    }
  }) 
  connect.end();
}

function writeArticle(fileName, detail, callback){
  fs.writeFile(path.resolve(__dirname, '../views/article/') + '/' + fileName + '.txt', detail, function(err) {
    if(err) {
      callback(false)
    }
    callback(true)
  });
};
function fileName(){
  var time = new Date();
  var year = time.getFullYear();
  var month = time.getMonth()+1;
  var day = time.getDate();
  var hours = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var str = String(year) + month + day + hours + minute + second;
  for(var i = 0;i < 4; i++){
      str += String(Math.round(Math.random()*9));
  }
  return str;
};


exports.detail = (req, res, next) => {
  const fileName = req.body.name
  fs.readFile(path.resolve(__dirname, '../views/article/') + '/' + fileName + '.txt', {encoding: 'utf8'}, function (err, data) {
    if(err) {
      res.send("获取详情失败！")
    } else {
      res.send(data)
    }
  });
}