import db from "../models/index";

const getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    res.send(JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getHomePage,
};
