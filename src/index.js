const app = require('./app')
const port= process.env.PORT || 3000;


app.listen(process.env.PORT || 3000)
    console.log("Server is on the port: " + port);
;