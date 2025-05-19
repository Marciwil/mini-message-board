const express = require("express")
const app = express();
const path = require("node:path");
const indexRouter = require("./routes/indexRouter")
const newRouter = require("./routes/newRouter")
const messageRouter = require("./routes/messageRouter");

//app.get("/", (req, res) => res.send("Hello World, Its Zenfuji!"));

app.get("/boys", (req, res) => res.send("This is where all of the boys live.")), // my personal example url

app.set("views", path.join(__dirname, "views")),
app.set("views engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newRouter);
app.use("/messages", messageRouter);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}, Babygirl!!`)
})