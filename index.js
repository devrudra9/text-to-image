const express = require("express");
const bodyParser = require("body-parser");
const text2image = require("text-to-image");

const app = express();

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { dataUri : '' });
})

app.post("/generateImage", (req, res) => {
    let text = req.body.text;
    let bcolor = req.body.bcolor;
    let align = req.body.align;
    let tcolor = req.body.tcolor;
    let fontsize = req.body.fontsize;

    text2image.generate(text, {
        fontFamily : "cursive",
        bgColor : bcolor,
        textColor : tcolor,
        textAlign : align,
        fontSize : fontsize,
    })
    .then((dataUri) => {
        res.render("index", { dataUri : dataUri });
    })

})

app.listen(3000, () => {
    console.log("App is running on port 3000.");
})