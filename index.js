const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('OoBRq8Ngj4', uuidlib.v4());
	}

module.exports = generateId
