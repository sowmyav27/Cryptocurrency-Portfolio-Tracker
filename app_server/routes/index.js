var express = require('express');
var router = express.Router();
var ctrlMain = require("../controller/main");

router.get('/', ctrlMain.home);

router.get('/home', ctrlMain.get_home);

router.get('/currency', ctrlMain.get_currency);

router.get('/convert', ctrlMain.get_convert);

router.post('/convert', ctrlMain.post_convert);

router.get('/addtowallet', ctrlMain.get_addwallet);

router.get('/mywallet', ctrlMain.get_mywallet);

router.get('/compareCurrency', ctrlMain.get_compareCurrency);

module.exports = router;
