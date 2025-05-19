const { Router } = require("express")
const messageRouter = Router();
const messages = require('../messages')

messageRouter.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    console.log('id', id)
    const message = messages.find(m => m.id === id);

    if(!message) {
        return res.status(404).send("messages not found");
    }
    res.render("messageDetails.ejs", { message });
});

module.exports = messageRouter;