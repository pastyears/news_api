"use strict";
const mysql = require("mysql");
const config = require("../config");
const db = config.db;
const result = config.result;
// 登录接口
exports.login = (req, res, next) => {
  const connect = mysql.createConnection(db);
  const params  = [req.body.username, req.body.password]
  connect.query("select User_name, User_time, User_icon, User_status from user where user_name=? and user_psw=?",
    params, function(err, data){
    if (data) {
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