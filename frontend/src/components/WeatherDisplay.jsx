const http = require("https");

const options = {
	"method": "GET",
	"hostname": "api.ambeedata.com",
	"port": null,
	"path": "/weather/forecast/by-lat-lng?lat=12&lng=77",
	"headers": {
		"x-api-key": "e166a58ae0776447275a01fecaeaa542386c52bcdaa6f769ec8cfb8158f9e83b",
		"Content-type": "application/json"
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();