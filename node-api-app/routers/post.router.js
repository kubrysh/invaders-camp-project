const express = require("express");

const router = express.Router();

router.get('/', async (req, res) => {
    res.json({
    })
});

router.post('/', async (req, res) => {
    res.sendStatus(201);
});

module.exports = router;
