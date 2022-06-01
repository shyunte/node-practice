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
    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        },{});
        return userInfo;
    }
    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return {success : true};
    }
}

module.exports = UserStorage;