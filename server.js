// load up the express framework and body-parser helper 
//? use the import version like this as we are using ES modules, not the older CommonJS version on the guide:
import express, { response } from "express";
import bodyParser from "body-parser";
import cors from "cors"

app.use(cors())
// create an instance of express to serve our end points
const app = express();
app.get("/", (request,response) => {
    response.send("You're on the home route")
})

// we'll load up node's built in file system helper library here
// (we'll be using this later to serve our JSON files)
//? ES Module conversion:
import fs from "fs";

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// this is where we'll handle our various routes from
//? again convert to new ES Modules version on import and path:
import routes from './routes/routes.js';
routes(app, fs);

// finally, launch our server on port 8080.
app.listen(8080, () => {
    console.log('listening on port 8080');
});