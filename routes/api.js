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

router.get('/search', model.search);

router.get('/register',model.register)
// 收藏列表获取
router.get('/collect',model.collect);
// 收藏
router.get('/addcollect',model.addcollect);
// 判断是否收藏
router.get('/iscollect',model.iscollect);
// 取消收藏
router.get('/deletecollect',model.deletecollect);
module.exports = router;
