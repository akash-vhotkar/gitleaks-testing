const express = require('express');
const server = require('express')();
const UserModel = require('./users');

require('./mongo-connection');
require('./connection');
server.use(express.json());
const { getAllUsers, setAllUsers } = require('./redis-list');

server.get('/', async (req, res) => {
    try {
        // user models
        const redisdata = await getAllUsers(getAllUsers);
        if (redisdata) {
            console.log("here is theredis call ", redisdata);
            return res.status(200).json({ message: "REDIS DB", data: redisdata });
        }

        const data = await UserModel.find();
        console.log("here we made the db call ", data);

        await setAllUsers(data)
        // send response to the status 
        return res.status(200).json({ message: "MONGO DB", data });
    }
    catch (error) {
        console.log("the error = ", error);
        return error;

    }
})

const AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

server.post('/', async (req, res) => {
    try {

        await UserModel.create(req.body);
        return res.status(200).json({ message: "User is created successfully." })
    }
    catch (error) {
        console.log("the error in code ", error);
    }
})


server.listen(9000, () => {
    console.log("Server is running on port 9000")
})