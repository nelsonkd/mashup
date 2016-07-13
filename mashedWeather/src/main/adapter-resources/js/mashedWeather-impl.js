function getMashedWeather(postalCode) {


	var postalCodeInput = {
	    adapter : 'geocode',
	    procedure : 'postalCodeSearch',
	    parameters : [postalCode]
	};

	var postalCode = MFP.Server.invokeProcedure(postalCodeInput);

	var darkskyInput = {
		adapter : "darksky",
		procedure : "getWeather",
		parameters : [postalCode.lat,postalCode.lng]
	}

	return MFP.Server.invokeProcedure(darkskyInput);
}
