const express = require('express');
const port = 5001;
const app = express();



// middleware qui permet de traiter les données de la requête

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/post", require("./src/routes/post.routes"));





// lancer le serveur
app.listen(port, () => console.log("le serveur a démarré sur le port" + port));
