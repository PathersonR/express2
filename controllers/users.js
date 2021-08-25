import express from 'express';
import {v4 as uuidv4} from 'uuid';
let users = [];
export const addDefaultData = () => {
    users = [
        { "id": uuidv4(), "fname" : "Bruce", "lname" : "Wayne"},
        { "id": uuidv4(), "fname" : "Clark", "lname" : "Kent"},        
        { "id": uuidv4(), "fname" : "Diana", "lname" : "Prince"}
    ]
}
export const getUsers = (request, response) => {
    if (users.length === 0) addDefaultData();
    console.log('GET:' +JSON.stringify(users))
    //response.send(users)
    const context = {'users': users, 'title' : 'user list'}
    response.render('users', context);
}
export const getUser = (request, response) => {
    const {id} = request.params;
    console.log('retrieving user id=' + id);
    const user = users.find( (user) => user.id === id)
    const context = {'user': user}
    response.render('user', context);   
}
export const deleteUser = (request, response) => {
    const {id} = request.params;
    console.log('deleting user id=' + id);
    users = users.filter( (user) => user.id !== id)
    response.send( 'deleted id = ' + id);   
}
export const createUser = (request, response) => {
    console.log('request method='+ request.method)
    if (request.method == 'GET') {
        console.log('GET logic')
        const context = {}
        response.render('createuser', context); 
    }
    else {
        console.log('POST logic')
        console.log("body=" + request.body);
        let {fname, lname} = request.body;
        console.log("fname="+ fname)
        console.log("lname="+ lname)
        let user = request.body;
        let newId = uuidv4();
        const newUser = { "id": uuidv4(), 
            "fname" : fname, "lname" : lname}
        users = [...users, newUser];
        const context = { 'users': users, 'title': 'user list'};
        response.render('users', context);
    }   
}
export const updateUser = (request, response) => {
    console.log('request method='+ request.method)
    if (request.method == 'GET') {
        console.log('GET logic')
        const {id} = request.params;
        console.log('retrieving user id=' + id);
        const user = users.find( (user) => user.id === id)
        const context = { 'user': user}
        response.render('updateuser', context); 
    }
    else {
        console.log('POST logic')
        console.log("body="+ request.body)
        let {id, fname, lname} = request.body
        console.log("id="+ id)
        console.log("fname="+ fname)
        console.log("lname="+ lname)
        let user = users.find( (user) => user.id === id)
        user.fname = fname;
        user.lname = lname;
        const context = { 'users': users, 'title': 'user list'}
        response.render('users', context);
        // response.send(users);
    }   
}






