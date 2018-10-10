var mysql = require('mysql');

var pools = new Map();

exports.getConnection = function(options, callback) {
	var pool = pools.get(options);
	if(!pool){
		pool = mysql.createPool(options);
		pools.set(options, pool);
	}
	pool.getConnection(callback);
};
