var weatherURI = "http://api.openweathermap.org/data/2.5/weather?q=";
var api = "APPID=7c99bd12f8e57f1557fe0472e9ea0a64";
var request = require("request");

module.exports.findWeatherByCity =function (city, cb){
	var query = weatherURI+city;
	console.log("inside findWEather by City",city);
	request(query, function (error, response, body){
		var body = JSON.parse(body);
		var temp = body.main.temp;
		console.log(temp)
		cb(temp);
	})
};