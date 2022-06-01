"use strict";

const User = require("../../models/User");

const output={
    hello : (req, res)=> {
        res.render("home/index");
    },
    
    login : (req, res)=>{
        res.render("home/login");
    },
}

const process = {
    login : (req, res)=>{
        const user = new User(req.body);
        const response = user.login();
        console.log(response);
        return res.json(response);
        
        
        response.success = false;
        response.msg = "로그인에 실패하였습니다."
        return res.json(response);
    },
}; 

module.exports = {
    output,
    process,
};