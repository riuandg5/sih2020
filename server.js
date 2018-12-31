const PORT = process.env.PORT || 3079;
const rpn  = require("request-promise-native");
const bp   = require("body-parser");
const app  = require("express")();

app.use(bp.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("Hello SIH 2019");
});

app.listen(PORT, () => console.log("Server started..."));