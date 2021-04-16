const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const port = process.env.port || 3000;
const app = express();
app.use(cors());
app.use(express.json());

//import schemas here
const userSchema = require('./schema/userSchema.js');
const farmerSchema = require("./schema/farmerSchema.js");
const serviceProviderSchema = require("./schema/serviceProviderSchema.js");
const serviceSchema = require("./schema/serviceSchema.js");
const cropSchema = require("./schema/cropSchema.js");
const User = mongoose.model('user', userSchema, 'user');
const Farmer = mongoose.model('farmer', farmerSchema, 'farmer');
const ServiceProvider = mongoose.model('service_provider', serviceProviderSchema, 'service_provider');
const Service = mongoose.model('service', serviceSchema, 'service');
const Crop = mongoose.model('crop', cropSchema, 'crop');

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
    return await User.findOne({ username: email });
  });

  if (!user) {
    res.status(400).json({
      response: 'User not found',
    });
  }
  else {
    if (bcrypt.compare(password, user.password)) {
      res.status(200).json({ 
        reponse: "success",
        userId: user.user_id,
        type: user.type
       });
    }
    else {
      res.status(400).json({
        response: 'Validation failed'
      });
    }
  }
});

app.get("/api/farmers", async (req, res) => {
  let farmers = await connector.then(async () => {
    return await Farmer.find();
  });
  if (!users) {
    res.status(400).json({ response: 'No farmers found' });
  }
  else {
    res.status(200).json({ response: farmers });
  }
});

app.get("/api/service-providers", async (req, res) => {
  let serviceProviders = await connector.then(async () => {
    return await ServiceProvider.find();
  });
  if (!users) {
    res.status(400).json({ response: 'No service providers found' });
  }
  else {
    res.status(200).json({ response: serviceProviders });
  }
});

app.post("/api/signup", async (req, res) => {
  let { email, password, type, name } = req.body;
  let salt = bcrypt.genSaltSync(10);
  password = bcrypt.hashSync(password, salt);

  let userId = mongoose.Types.ObjectId();
  let user = await connector.then(async () => {
    return new User({
      username: email,
      password: password,
      type: type,
      name: name,
      user_id: userId
    }).save();
  });

  if (!user) {
    res.status(400).json({
      response: 'User creation error',
    })
  }
  else {
    let userType;
    if (type == 'Farmer') {
      userType = await connector.then(async () => {
        return new Farmer({
          farmer_id: userId,
          name: name
        }).save();
      });
    }
    else if (type == 'Service Provider') {
      userType = await connector.then(async () => {
        return new ServiceProvider({
          provider_id: userId,
          name: name
        }).save();
      });
    }

    if (!userType) {
      res.status(400).json({ response: "failure in creating user type"});
    }
    res.status(200).json({ 
      reponse: "success",
      userId: userId,
      type: type
    });
  }
});

app.post("/api/addDesire", async (req, res) => {
  let ( userId, type, desire ) = req.body;
  let desires, user;
  if (type == "Service Provider") {
    user = await connector.then(async () => {
      return await ServiceProvider.findOne({ UserId : userId });
    });
  }
  else {
    user = await connector.then(async () => {
      return await Farmer.findOne({ UserId : userId });
    });
  }
  desires = user.desires;
  desires.push(desire);
  user.desires = desires;
  await user.save();
  res.status(200).json({
    response: "success"
  });
});

app.post("/api/updateDescription", async (req, res) => {
  let ( userId, type, description ) = req.body;
  let description, user;
  if (type == "Service Provider") {
    user = await connector.then(async () => {
      return await ServiceProvider.findOne({ UserId : userId });
    });
  }
  else {
    user = await connector.then(async () => {
      return await Farmer.findOne({ UserId : userId });
    });
  }
  user.description = description;
  await user.save();
  res.status(200).json({
    response: "success"
  });
});

app.post("/api/updateLocation", async (req, res) => {
  let ( userId, type, location ) = req.body;
  let location, user;
  if (type == "Service Provider") {
    user = await connector.then(async () => {
      return await ServiceProvider.findOne({ UserId : userId });
    });
  }
  else {
    user = await connector.then(async () => {
      return await Farmer.findOne({ UserId : userId });
    });
  }
  user.location = location;
  await user.save();
  res.status(200).json({
    response: "success"
  });
});

app.post("/api/updateContact", async (req, res) => {
  let ( userId, type, contact ) = req.body;
  let contact, user;
  if (type == "Service Provider") {
    user = await connector.then(async () => {
      return await ServiceProvider.findOne({ UserId : userId });
    });
  }
  else {
    user = await connector.then(async () => {
      return await Farmer.findOne({ UserId : userId });
    });
  }
  user.contact = contact;
  await user.save();
  res.status(200).json({
    response: "success"
  });
});

app.post("/api/addItem", async (req, res) => {
  let ( userId, type, item ) = req.body;
  let user, newItem, allItems;
  let itemId = mongoose.Types.ObjectId();
  if (type == "Service Provider") {
    user = await connector.then(async () => {
      return await ServiceProvider.findOne({ UserId : userId });
    });
    newItem = await connector.then(async () => {
      return new Service({
        service_id: itemId,
        name: item
      }).save();
    });
    allItems = user.services;
    allItems.push(newItem);
    user.services = allItems;
    await user.save();
  }
  else {
    user = await connector.then(async () => {
      return await Farmer.findOne({ UserId : userId });
    });
    newItem = await connector.then(async () => {
      return new Crop({
        crop_id: itemId,
        name: item
      }).save();
    });
    allItems = user.crops;
    allItems.push(newItem);
    user.crops = allItems;
    await user.save();
  }
})

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});

module.exports = {
  app,
};
