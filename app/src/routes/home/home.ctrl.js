"use strict";

const output={
    hello = (req, res)=> {
        res.render("home/index");
    },

    login = (req, res)=>{
        res.render("home/login");
    },
}

module.exports = {
    output,
};