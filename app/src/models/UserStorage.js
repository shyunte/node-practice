"use strict";

class UserStorage{
    static #users = { // #은 public > private로 변경하는 것
        id :["shyun", "sht123","sht2253"],
        password :["123", "123","123456"],
        name : ["신현태", "신개발", "왕현태"],
    };
    static getUsers(...fields){
        const users =this.#users;
        const newUsers= fields.reduce((newUsers,field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }
}

module.exports = UserStorage;