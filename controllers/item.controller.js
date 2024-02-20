const Item = require("../db/models/item.model");
const path = require("path");

const upload = async (req, res) => {
	try {
		const img = req.files.image;
		const imgPath = path.join(
			__dirname,
			"../uploads/" + img.name
		)

		await img.mv(imgPath);
		res.status(201).json({ image: { src: "/uploads/" + img.name } })
	} catch(e) {
		res.status(400).send("Upload Unsuccessful: " + e.message)
	}
}

const createItem = async (req, res) => {
	try {
		const newItem = await Item.create(req.body);
		res.status(201).json({ msg: "Item Creation Successful", item: newItem })
	} catch(e) {
		res.status(400).send("Item Creation Unsuccessful: " + e.message)
	}
}

const getItems = async (req, res) => {
	try {
		const allItems = await Item.find({});
		res.status(200).json(allItems)
	} catch(e) {
		res.status(400).send("=( " + e.message)
	}
}

module.exports = {
	upload,
	createItem,
	getItems
}