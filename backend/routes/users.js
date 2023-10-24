const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("user list");
})

router.get("/new", (req, res) => {
    res.send("create user");
})

router.route("/:id").get((req, res) => {
    res.send(`get user ${req.params.id}`);
}).put((req, res)=> {
    res.send(`update user ${req.params.id}`)
}).delete((req, res)=> {
    res.send(`delete user ${req.params.id}`)
})

module.exports = router;