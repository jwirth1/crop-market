const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const port = process.env.port || 3000;
const app = express();
app.use(cors());
app.use(express.json());

//import schemas here
const userSchema = require('./schema/userSchema.js');
const User = mongoose.model('user', userSchema, 'user');

const connectionString = 'mongodb+srv://cropAdmin:theCropMarket@cluster0.gjru1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", express.static("public"));

const connector = mongoose.connect(connectionString);

app.get("/api/allusers", async (req, res) => {
  let users = await connector.then(async () => {
    return await User.find();
  });

  if (!users) {
    res.status(400).json({ response: 'No users found' });
  }
  else {
    res.status(200).json({ response: users});
  }
})

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  let user = await connector.then(async () => {
    return await User.findOne({ username: email, password: password });
  });

  if (!user) {
    res.status(400).json({
      response: 'User not found',
    })
  }
  else {
    res.status(200).json({ reponse: "success" });
  }
});

app.post("/api/signup", async (req, res) => {
  const { email, password, type, name } = req.body;
  let user = await connector.then(async () => {
    return new User({
      username: email,
      password: password,
      type: type,
      name: name,
      user_id: mongoose.Types.ObjectId()
    }).save()
  });

  if (!user) {
    res.status((400).json({
      response: 'User creation error',
    })
  )}
  else {
    res.status(200).json({ reponse: "success" });
  }
});


app.listen(port, () => {
  console.log(`Server on port ${port}`);
});

module.exports = {
  app,
};
