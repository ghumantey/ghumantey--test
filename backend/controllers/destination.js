const Destination = require("../models/Destination");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find({});
    if (!destinations) {
      res.json({ err: "No destinations found" });
    }
    res.status(200).json({ destinations });
  } catch (err) {
    res.json({ message: `${err.message}` });
  }
};

const getSingleDestinations = async (req, res) => {
  try{
    const { id: Destinationid } = req.params;
  const destination = await Destination.find({ _id: Destinationid });

  if (!destination) {
    res.json({ err: "No destinations found" });
  }

  res.status(200).json(destination);
  }catch(err){
    res.json({ message: `${err.message}` });
  }
};

const createDestination = async (req, res) => {
try{
  const destination = await Destination.create(req.body);

  if (!destination) {
    res.json({ err: "No destination created" });
  }

  res.status(200).json({ destination });
}catch(err){
  res.json({ message: `${err.message}` });
}
};

const deleteDestination = async (req, res) => {
  try{
    const { id: Destinationid } = req.params;
  const destination = await Destination.findOneAndRemove({
    _id: Destinationid,
  });
  if (!destination) {
    res.json({ err: "No destinations found" });
  }
  res.status(200).send("Destination deleted");
  }catch(err){
    res.json({ message: `${err.message}` });
  }
};

module.exports = {
  getAllDestinations,
  getSingleDestinations,
  createDestination,
  deleteDestination,
};
