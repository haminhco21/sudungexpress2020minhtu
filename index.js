const express = require('express');
const app = express();
const port = 3000;
app.get('/', function(request, response) {
    response.send('<div><p>Hello Minh Tu</p></div>');
});

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});