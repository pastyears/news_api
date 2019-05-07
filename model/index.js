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
  const params = [req.body.username, req.body.password]
  connect.query("select User_id,User_name, User_time, User_icon, User_status from user where user_name=? and user_psw=?",
    params, function (err, data) {
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
  const page = req.query.page;
  const size = req.query.size
  const params = [req.query.cate, (page - 1) * size, page * size]
  connect.query("select * from news where News_style=? limit ?, ?",
    params, function (err, data) {
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
  const detail = req.body.content.replace(/1314/g, '+')
  const cover = req.body.cover
  const nowName = `${fileName()}`
  let base64Data = cover.replace(/^data:image\/\w+;base64,/, "");
  base64Data = base64Data.replace(/ /g, "+");
  const dataBuffer = new Buffer(base64Data, 'base64');
  const imageSrc = path.resolve(__dirname, '../public/images') + '/' + nowName + '.png'

  fs.writeFile(imageSrc, dataBuffer, function (err) {
    if (!err) {
      console.log("上传封面成功！")
    }
  });
  const params = {
    News_title: req.body.title,
    News_content: nowName,
    News_author: req.body.author,
    News_style: req.body.cate,
    News_images: `/images/${nowName}.png`,
    News_author:"匿名",
    News_source:"匿名",
    News_time:getLocalTime(),
    Update_time:getLocalTime(),
  }
  connect.query("insert into news set ?",
    params, function (err, data) {
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

function writeArticle(fileName, detail, callback) {
  fs.writeFile(path.resolve(__dirname, '../views/article/') + '/' + fileName + '.txt', detail, function (err) {
    if (err) {
      callback(false)
    }
    callback(true)
  });
};
function fileName() {
  var time = new Date();
  var year = time.getFullYear();
  var month = time.getMonth() + 1;
  var day = time.getDate();
  var hours = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var str = String(year) + month + day + hours + minute + second;
  for (var i = 0; i < 4; i++) {
    str += String(Math.round(Math.random() * 9));
  }
  return str;
};
function getLocalTime() {
  var date = new Date;
  var now = date.getTime();
  // 如果以秒为单位
  // var dateObj = new Date(timestamp * 1000);
  // 如果以毫秒为单位
  var dateObj = new Date(now);
  return dateObj.getFullYear() + '-' +
    (((dateObj.getMonth() + 1) > 9) ? (dateObj.getMonth() + 1) : '0' + (dateObj.getMonth() + 1)) + '-' +
    ((dateObj.getDate() > 9) ? dateObj.getDate() : '0' + dateObj.getDate()) + ' ' +
    ((dateObj.getHours() > 9) ? dateObj.getHours() : '0' + dateObj.getHours()) + ':' +
    ((dateObj.getMinutes() > 9) ? dateObj.getMinutes() : '0' + dateObj.getMinutes()) + ':' +
    ((dateObj.getSeconds() > 9) ? dateObj.getSeconds() : '0' + dateObj.getSeconds());
}

exports.detail = (req, res, next) => {
  const fileName = req.body.name
  fs.readFile(path.resolve(__dirname, '../views/article/') + '/' + fileName + '.txt', { encoding: 'utf8' }, function (err, data) {
    if (err) {
      res.send("获取详情失败！")
    } else {
      res.send(data)
    }
  });
}

exports.search = (req, res, next) => {
  const connect = mysql.createConnection(db);
  const params = [req.query.content];
  connect.query(`select * from news where News_title like'%${req.query.content}%'`,
    [], function (err, data) {
      if (data) {
        result.code = "0";
        result.msg = "搜索成功！";
        result.data = data;
      } else {
        result.code = "1";
        result.msg = "搜索失败！";
        result.data = null;
      }
      res.send(result);
    })
  connect.end();
}


// 收藏列表获取
exports.collect = (req, res, next) => {
  const connect = mysql.createConnection(db);
  const page = req.query.page;
  const size = req.query.size
  const params = [req.query.User_id, (page - 1) * size, page * size]
  connect.query(`select * from  collect ,news  where User_id= ? and collect.News_id=news.News_id limit ?, ? `,
    params, function (err, data) {
      if (data) {
        result.code = "0";
        result.msg = " 查询成功！";
        result.data = data;
      } else {
        result.code = "1";
        result.msg = "查询失败！";
        result.data = null;
      }
      res.send(result);
    })
  connect.end();
}

// 注册
exports.register = (req, res, next) => {
  var date = new Date;
  var now = date.getTime();
  // 自动显示当前时间
  const param = [req.query.username];
  const params = {
    User_name: req.query.username,
    User_psw: req.query.password,
    User_status: 1,
    User_time: getLocalTime(now)
  };

  const connect = mysql.createConnection(db);
  connect.query("select * from  user where User_name= ? ",
    param, function (err, data) {
      if (data[0]) {
        result.code = "1";
        result.msg = "用户名存在";
        result.data = null;
        res.send(result);
        return
      }
    })
  connect.query("insert into user set ?",
    params, function (err, data) {
      if (data.affectedRows > 0) {
        result.code = "0";
        result.msg = "注册成功,返回登陆";
        result.data = data;
      } else {
        result.code = "1";
        result.msg = "注册失败！";
        result.data = null;
      }
      res.send(result);
    })
  connect.end();
}

// 判断收藏
exports.iscollect = (req, res, next) => {
  const connect = mysql.createConnection(db);
  const params = [req.query.User_id, req.query.News_id];
  connect.query(`select News_id from  collect where  User_id= ? and News_id=? `,
    params, function (err, data) {
      if (data[0]) {
        console.log(data);
        result.code = "0";
        result.msg = " 已收藏";
        result.data = data;
      } else {
        result.code = "1";
        result.msg = "未收藏";
        result.data = null;
      }
      res.send(result);
    })
  connect.end();
}
// 添加收藏
exports.addcollect = (req, res, next) => {
  const connect = mysql.createConnection(db);
  const params = {
    User_id: req.query.User_id,
    News_id: req.query.News_id
  };
  connect.query(`insert into collect set ?`,
    params, function (err, data) {
      if (data.affectedRows > 0) {
        result.code = "0";
        result.msg = " 已收藏";
        result.data = data;
      } else {
        result.code = "1";
        result.msg = "收藏失败！";
        result.data = null;
      }
      res.send(result);
    })
}
// 取消收藏
exports.deletecollect = (req, res, next) => {
  const connect = mysql.createConnection(db);
  const params = [req.query.User_id, req.query.News_id];
  connect.query(`delete from  collect  where  User_id= ? and News_id=? `,
    params, function (err, data) {
      if (data.affectedRows > 0) {
        result.code = "0";
        result.msg = " 请稍后添加";
        result.data = data;
      } else {
        result.code = "1";
        result.msg = "未取消收藏！";
        result.data = null;
      }
      res.send(result);
    })
}
