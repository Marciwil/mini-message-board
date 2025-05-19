const { Router } = require("express")
const indexRouter = Router();
const messages = require("../messages")

// messageRouter.get("/", (req, res) => res.send(messages));
indexRouter.get("/", (req, res) => { 
    res.render("index.ejs", {messages});
});


module.exports = indexRouter;