// This adapter shows using query parameters. To test using Swagger enter a
// valid postalCode in the parameters, for example:
//		["92673"]
function postalCodeSearch(postalCode,countryCode) {

	//Default to the US if there is no country code provided
	if(countryCode==undefined){
		countryCode = 'US';
	}

	//	API Key/Username for geonames
	// register for a user name at http://www.geonames.org/login
	var apiUserName = "[REPLACE WITH GEONAMES USERID]";

	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : 'postalCodeSearchJSON',
		parameters: {
						'postalcode':postalCode,
						'country':countryCode,
						'maxRows':'10',
						'username':apiUserName
					}
	};

	var response = MFP.Server.invokeHttp(input);

	var postalCode	=	{};
	if(response.statusCode == 200){
		// Parse out all the stuff that doesn't need to be returned with the response body.
		// Grab just the first postal code response & return that
		postalCode= response.postalCodes[0];
	} else {
		postalCode = response
	}

	return postalCode;
}

