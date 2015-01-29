var PORT = 8899;
var app = require('./config/express')();

require('./config/routes')(app);

app.listen('3000')
console.log("application is running on http://localhost: 3000");
