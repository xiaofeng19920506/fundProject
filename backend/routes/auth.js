const express = require("express");
const AuthRouter = express.Router();
const bcrypt = require("bcrypt");
const User = require('../db/userModel');
const jwt = require('jsonwebtoken');

AuthRouter.post("/register", (req, res) => {
    console.log("request", req.body);
    bcrypt.hash(req.body.password, 10)
    .then((hashed) => {
        const user = new User({
            email: req.body.email,
            password: hashed,
            userName: req.body.userName,
            phone: req.body.phone,
        });
        user.save()
        .then((saved) => {
            res.status(201).send({
                message: "user created successfully",
                saved,
            })
        }).catch((error) => {
            res.status(500).send({
                message: "failed creating user",
                error,
            })
        })
    }).catch((error) => {
        res.status(500).send({
            message: "Password hash failed",
            error,
        })
    })
});

AuthRouter.post("/login", (req, res) => {
    User.findOne({ userName: req.body.userName})
    .then((user) => {
        bcrypt.compare(req.body.password, user.password)
        .then((passwordCheck) => {
            if (!passwordCheck) {
                return res.status(400).send({
                    message: "Incorrect password",
                    error,
                })
            }
            const token = jwt.sign({
                    Id: user.id,
                    userName: user.userName,
                },
                process.env.JWT_TOKEN,
                { expiresIn: process.env.JWT_TOKEN_EXPIRED }
            );

            res.status(200).send({
                message: "Login successful",
                userName: user.userName,
                token,
            });
        })
    })
    .catch((error) => {
        res.status(404).send({
            message: "User not found",
            error,
        })
    })
})

AuthRouter.post("logout", (req, res) => {
    const token = req.body.token;
    
    if (!token) {
        return res.status(400).send({
            message: "Token not provided",
        });
    }

    res.status(200).send({
        message: "Token has been blacklisted",
    });
})

module.exports = AuthRouter;
