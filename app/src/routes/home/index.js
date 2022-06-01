"use strict";
const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);


module.exports = router;    //외부로 내보내줄 수 있도록 하는 명령어