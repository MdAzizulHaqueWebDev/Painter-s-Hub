/** @format */

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
require("dotenv").config();

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.zyi5zeh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

client
	.connect()
	.then(() => {
		console.log("MongoDB Connected");
	})
	.catch((err) => {
		console.log(err);
	});

// Middleware Connections
const corsConfig = {
	origin: [
		"http://localhost:5173",
		"https://assignment-10-authectication.web.app",
	],
	credentials: true,
};
app.use(cors(corsConfig));

async function run() {
	try {

		// Add craft data store in Databas
		const usersAddCraftCollection = client
			.db("addCraftDB")
			.collection("craftCollection");
		const allArtsAndCraftCollection = client
			.db("artsAndCraftDB")
			.collection("allArtsAndCraftCollection");

		// create add craft item
		app.post("/add-craft-item", async (req, res) => {
			const craftData = req.body;
			const result = await usersAddCraftCollection.insertOne(craftData);
			res.send(result);
		});
		// get all data users have added database
		app.get("/all-arts-and-crafts", async (req, res) => {
			const usersAddedAllArtsAndCraftsData = usersAddCraftCollection.find();
			const result = await usersAddedAllArtsAndCraftsData.toArray();
			res.send(result);
		});

		// get single users added
		app.get("/usersAddedData/:id", async (req, res) => {
			const id = req.params.id;
			const query = { _id: new ObjectId(id) };
			const result = await usersAddCraftCollection.findOne(query);
			res.send(result);
		});

		// single data details by id
		app.get("/details/:id", async (req, res) => {
			const id = req.params.id;
			const query = { _id: new ObjectId(id) };
			const result = await usersAddCraftCollection.findOne(query);
			res.send(result);
		});

		// get my art and craft data
		app.get("/my-art-and-craft", async (req, res) => {
			const cursor = usersAddCraftCollection.find();
			const craftData = await cursor.toArray();
			res.send(craftData);
		});
		// update user craft data data
		app.put("/itemUpdate/:id", async (req, res) => {
			const id = req.params.id;
			const getUpdateData = req.body;
			const filter = { _id: new ObjectId(id) };
			const options = { upsert: true };
			const updateData = {
				$set: {
					customization: getUpdateData.customization,
					itemName: getUpdateData.itemName,
					subcategory: getUpdateData.subcategory,
					rating: getUpdateData.rating,
					price: getUpdateData.price,
					stock: getUpdateData.stock,
					processingTime: getUpdateData.processingTime,
					photoUrl: getUpdateData.photoUrl,
					description: getUpdateData.description,
				},
			};
			const result = await usersAddCraftCollection.updateOne(
				filter,
				updateData,
				options,
			);
			res.send(result);
		});

		// for all arts and craft collection

		app.post("/allArtsAndCrafts", async (req, res) => {
			const allData = req.body;
			const result = await allArtsAndCraftCollection.insertMany(allData);
			res.send(result);
		});
		// get all arts and craft collection
		app.get("/allArtsAndCrafts", async (req, res) => {
			const cursor = allArtsAndCraftCollection.find();
			const result = await cursor.toArray();
			res.send(result);
		});
		// get single arts and craft collection
		app.get("/allArtsAndCrafts/:id", async (req, res) => {
			const id = req.params.id;
			const query = { _id: new ObjectId(id) };
			const result = await allArtsAndCraftCollection.findOne(query);
			res.send(result);
			console.log(id);
		});

		app.get("/landscape-painting", async (req, res) => {
			const query = { subcategory: "Landscape Painting" };
			const cursor = allArtsAndCraftCollection.find(query);
			const result = await cursor.toArray();
			res.send(result);
		});
		app.get("/portrait-drawing", async (req, res) => {
			const query = { subcategory: "Portrait Drawing" };
			const cursor = allArtsAndCraftCollection.find(query);
			const result = await cursor.toArray();
			res.send(result);
		});
		app.get("/watercolour-painting", async (req, res) => {
			const query = { subcategory: "Watercolour Painting" };
			const cursor = allArtsAndCraftCollection.find(query);
			const result = await cursor.toArray();
			res.send(result);
		});
		app.get("/oil-painting", async (req, res) => {
			const query = { subcategory: "Oil Painting" };
			const cursor = allArtsAndCraftCollection.find(query);
			const result = await cursor.toArray();
			res.send(result);
		});
		app.get("/charcoal-sketching", async (req, res) => {
			const query = { subcategory: "Charcoal Sketching" };
			const cursor = allArtsAndCraftCollection.find(query);
			const result = await cursor.toArray();
			res.send(result);
		});
		app.get("/cartoon-drawing", async (req, res) => {
			const query = { subcategory: "Cartoon Drawing" };
			const cursor = allArtsAndCraftCollection.find(query);
			const result = await cursor.toArray();
			res.send(result);
		});

		// Delete an item
		app.delete("/my-art-and-craft/:id", async (req, res) => {
			const id = req.params.id;
			const query = { _id: new ObjectId(id) };
			const result = await usersAddCraftCollection.deleteOne(query);
			res.send(result);
		});

		// Send a ping to confirm a successful connection
		// await client.db("admin").command({ ping: 1 });
		// console.log(
		// 	"Pinged your deployment. You successfully connected to MongoDB!",
		// );
	} finally {
		// Ensures that the client will close when you finish/error
		// await client.close();
	}
}
run().catch(console.log);

app.get("/", (req, res) => {
	res.send("hello world");
});

app.listen(port, () => {
	console.log(`The is server is running now : ${port}`);
});
