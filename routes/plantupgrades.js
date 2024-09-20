const userRoutes = (app, fs) => {
    // variables
    //? ES Module conversion on the path:
    const dataPath = './apidata/plantupgrades.json';

    // READ
    app.get('/plantupgrades', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        res.send(JSON.parse(data));
        });
    });
};

//? Convert from CommonJS in the guide to ES Modules version:
export default userRoutes;
