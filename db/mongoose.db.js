const mongoose = require("mongoose");

const connectToDB = (url) => {
	console.log("Connecting to Database:")
	const connection = mongoose.connect(url);
	if(connection) {
		console.log("Connection was successful");
		return connection;
	}

	throw new Error("There was a problem connecting to the database.");
}

module.exports = connectToDB;