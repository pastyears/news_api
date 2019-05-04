const express = require('express');
const router = express.Router();
const model = require("../model/index.js");

/* 获取banner上的小仙女图片*/
router.get('/get_banner', function(req, res, next) {
  res.send('respond with a resource');
});

// 登录
router.post('/login', model.login);
// 获取列表
router.get('/list', model.list);

router.post('/publish', model.publish);

router.post('/detail', model.detail);

module.exports = router;
