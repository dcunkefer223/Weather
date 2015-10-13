var weatherURI = "http://api.openweathermap.org/data/2.5/weather?q=";
var api = "&appid=947a657e6508596dab26e548d847454c";
var request = require("request");

module.exports.findWeatherByCity =function (city, cb){
	var query = weatherURI+city+api;
	console.log("inside findWEather by City",city);
	request(query, function (error, response, body){
		var body = JSON.parse(body);
		var temp = body.main.temp;
		console.log(temp)
		cb(temp);
	})
};