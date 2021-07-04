const express = require("express");
const app     = express();
const path    = require("path");
const rutasMain = require("./routes/main");
const rutasCart = require("./routes/cart");
const rutasProducts = require("./routes/products");
const rutasUsers = require("./routes/users");

/*-------------------------------Comandos con app-------------------------------*/

app.listen( process.env.PORT || 3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
} );

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", rutasMain);
app.use("/cart", rutasCart);
app.use("/catalog", rutasProducts);
app.use("/access", rutasUsers);
