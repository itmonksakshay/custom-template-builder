const path = require('path');
const express= require('express');
app=express();
app.use(express.static('./build'));
app.get('*', function(request,response) {
	response.sendFile(path.join(__dirname,"./build/index.html"));
});
app.listen(process.env.PORT||3000,function(){
	console.log("the server is running on port %s");
});