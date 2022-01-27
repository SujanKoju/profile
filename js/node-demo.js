const http = require('http');
const dateHelper = require("./myModule");



   http.createServer(((req, res) => {
        res.writeHead(200, {'content-type': 'text/html'});
       res.write("The date and time are currently: " + dateHelper.getDate());
        res.end();
    })).listen(8080);


