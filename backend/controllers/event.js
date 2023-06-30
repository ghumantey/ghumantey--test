const Event = require("../models/Event");
const { BadRequestError, NotFoundError } = require('../errors');
const { sendPushNotification } = require("../services/pushNotification");


const getAllEvents = async (req, res) => {
  const events = await Event.find({});
  res.status(200).json({ events });
};

const getSingleEvent = async (req, res) => {
  const { id: eventId } = req.params;
  const event = await Event.findOne({ _id: eventId });

  if (!event) {
    console.log("No event")
    throw new NotFoundError(`No event found with id ${eventId}`);
  }

  res.status(200).json(event);
};

const createEvent = async (req, res) => {
  const {title, description, photo} = req.body;
  const event = await Event.create(req.body);
  sendPushNotification(title, photo);
  res.status(200).json({ event });
};

const deleteEvent = async (req, res) => {
  const { id: eventId } = req.params;
  const event = await Event.findOneAndRemove({ _id: eventId });
  if (!event) {
    throw new NotFoundError(`No event found with id ${eventId}`);
  }
  res.status(200).send("Event deleted");
};

module.exports = {
  getAllEvents,
  getSingleEvent,
  createEvent,
  deleteEvent,
};
