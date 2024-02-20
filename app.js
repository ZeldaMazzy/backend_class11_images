// * IMPORTS
const express = require('express'); 
const fileUpload = require("express-fileupload");
const app = express(); 
require('dotenv').config();

// * CONFIG
const PORT = 5000; 
const SERVER_URL = `http://localhost:${PORT}`;
const connectToDB = require("./db/mongoose.db");

const start = async () => {
	try {
		connectToDB(process.env.CONNECTION_STRING)
		app.listen(PORT, () => {
			console.log(`Server is running at: ${SERVER_URL}`);
		});
	} catch(e) {
		console.error("There was an error starting the app: ", e.message);
	}
	
}

// * MIDDLEWARE
app.use(express.json());
app.use(fileUpload());
app.use(express.static('./uploads'));

// * ROUTES
const itemsRoute = require("./routes/item.route");

app.get('/', (req, res) => {
	res.send('Image Upload API');
});

app.use("/api/v1/item", itemsRoute);

// * LISTEN
start();