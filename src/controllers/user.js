const { Users } = require("../models");

module.exports = {
  create_user: async (req, res) => {
    const { name, email } = req.body;
    await Users.create({ name: name, email: email });
    res.send("Success");
  },
};
