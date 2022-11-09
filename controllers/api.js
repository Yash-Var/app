const auto = require("../models/api");
const getAllMember = async (req, res) => {
  try {
    const member = await auto.find({});
    // console.log(member);
    res.status(200).json({ member });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
module.exports=getAllMember