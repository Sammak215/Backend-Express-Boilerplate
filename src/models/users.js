const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema(
  {
    name: String,
    email: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", UsersSchema);
