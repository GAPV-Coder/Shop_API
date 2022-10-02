const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");

const app = express();

dotenv.config();

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("DB Connection Successfull!"))
	.catch(err => {
		console.log("Sorry, an error occurred with the DB connection!", err);
	});

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.listen(process.env.PORT || 5000, () => {
	console.log("Backend server is running!");
});
