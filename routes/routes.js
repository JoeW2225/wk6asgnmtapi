// load up our shiny new route for plant upgrades
//? ES Module conversion:
import userRoutes from "./plantupgrades.js";

const appRouter = (app, fs) => {
    // we've added in a default route here that handles empty routes
    // at the base API url

    app.get('/', (req, res) => {
        res.send('Welcome to the API server');
    });

    // run our user route module here to complete the wire up
userRoutes(app, fs);
};

//? ES Module conversion:
export default appRouter;