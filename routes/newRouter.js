const { Router } = require("express")
const newRouter = Router();
const messages = require("../messages")

newRouter.post("/", (req,res) => {
    const { text, user} = req.body;
    const newID = messages.length;
messages.push({ id: newID, text: text, user: user, added: new Date() });
    res.redirect("/");
});

module.exports = newRouter;