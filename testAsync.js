var myAsync = require ('./async.js');
myAsync('testfile.txt', function(err){
	if (err){
		throw err;
	}
});
