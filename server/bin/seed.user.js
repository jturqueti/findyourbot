const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
require("../config/dbConnection");
const bcrypt = require("bcrypt");

const User = require("../models/User");

const salt = 10;

const users = [
  {
    firstName: "bab",
    lastName: "babou",
    email: "bab@gmail.com",
    password: bcrypt.hashSync("1234", salt),
    phoneNumber: "06060606606",
  },
  {
    firstName: "Julia",
    lastName: "The Cat",
    email: "julia@gmail.com",
    password: bcrypt.hashSync("1234", salt),
    phoneNumber: "06060606606",
  },
];

async function seedUsers() {
  try {
    await User.collection
      .drop()
      .catch((error) => console.log("No collection to drop, proceeding..."));

    const createdUsers = await User.create(users);
    console.log(createdUsers);
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
}

seedUsers();
