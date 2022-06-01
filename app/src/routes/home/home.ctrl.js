"use strict";


const output={
    hello : (req, res)=> {
        res.render("home/index");
    },
    
    login : (req, res)=>{
        res.render("home/login");
    },
}
const users= {
    id :["shyun", "sht123","sht2253"],
    password :["123", "123","123456"],
};

const process = {
    login : (req, res)=>{
        console.log(req.body);
        const id = req.body.id,
        password = req.body.password;
        if (users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.password[idx] === password){
                return res.json({
                    success : true,
                });
            }
        } 
        return res.json({
            success : false,
            msg: "로그인에 실패하셨습니다.",
        });
    },
}; 

module.exports = {
    output,
    process,
};