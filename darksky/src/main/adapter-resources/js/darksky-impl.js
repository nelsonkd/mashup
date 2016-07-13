// This adapter shows using url parameters. To test using Swagger enter a
// valid latitude and longitude in the parameters, for example:
//		["33.461494","-117.637465"]
function getWeather(latitude,longitude) {

	//	Darksky API KEY. Once the daily max is reached it will stop returning data.
	//	Register for an API Key by  creating an account at https://developer.forecast.io/register
	var apikey = "[REPLACE WITH DARK SKY API KEY]";

	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : "forecast/" + apikey + "/" + latitude + "," + longitude
	};

	return MFP.Server.invokeHttp(input);
}
