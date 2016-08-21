/**/

module.exports = {

	generateToken: function() {
		return Math.random().toString(36).substring(10);
	}, 
	encodeData: function(data_to_encode) {
		return data_to_encode;
	},
	decodeData: function(data_to_decode) {
		return data_to_decode;
	}

}