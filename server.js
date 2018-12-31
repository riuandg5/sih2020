const PORT = process.env.PORT || 3079;
const API  = process.env.NODE_ENV !== "production" ? require("./config.json") : process.env.API;
const rpn  = require("request-promise-native");
const bp   = require("body-parser");
const app  = require("express")();

app.use(bp.urlencoded({extended: true}));
app.set("view engine", "ejs");

const problemsArray = [];
let page = 0;

function problemsFromPage(pageNum) {
    return new Promise(async resolve => {
        const body = await rpn({
            uri: `https://wrapapi.com/use/${API.username}/${API.repository}/${API.endpoint}/latest`,
            qs: {
                pageNum,
                wrapAPIKey: API.key
            },
            json: true
        });
        body.success ? resolve(body.data[Object.keys(body.data)[0]]) : problemsFromPage(pageNum);
    });
}

app.get("/", (req, res) => {
    res.render("index", {problems: problemsArray, pageNum: page + 1, totalPages: API.totalPages});
});

app.post("/", async (req, res) => {
    const problems = await problemsFromPage(req.body.pageNum);
    problemsArray.push(...problems);
    page += 1;
    res.send(problems);
});

app.get("/update", (req, res) => {
    problemsArray.length = 0;
    page = 0;
    res.redirect("/");
});

app.listen(PORT, () => console.log("Server started..."));