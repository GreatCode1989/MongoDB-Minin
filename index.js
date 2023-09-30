const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");


const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
    defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views')

async function start() {
  try {
    await mongoose.connect("mongodb+srv://wef353wef535:Devil666devil3@cluster0.o3z7u6s.mongodb.net/todos", {
        useNewUrlParser: true,
    
    });
    app.listen(PORT, () =>
      console.log(`Example app listening on port ${PORT}!`)
    );
  } catch (e) {
    console.log(e);
  }
}

start();
