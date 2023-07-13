const Service = require("../models/service");
const moment = require("moment");

const add = async (req, res) => {
  try {
    let data = {
      ScheduleType: req.body.ScheduleType,
      Date: moment(req.body.Date).format("YYYY-MM-DD"),
      hour: req.body.hour,
      slot: req.body.slot,
      timeslot: req.body.timeslot,
      time: Date(req.body.Date),
      day: req.body.day,
    };
    const service = await Service.create(data);
    return res.status(200).send(service);
  } catch (error) {
    console.log(error);
  }
};

const getAll = async (req, res) => {
  try {
    const service = await Service.find();
    return res.status(200).send(service);
  } catch (error) {
    console.log(error);
  }
};

const getOne = async (req, res) => {
  try {
    let id = req.params.id;
    const service = await Service.findById({ _id: id });
    return res.status(200).send(service);
  } catch (error) {
    console.log(error);
  }
};

const update = async (req, res) => {
  try {
    let id = req.params.id;
    let data = {
      ScheduleType: req.body.ScheduleType,
      Date: moment(req.body.Date).format("DD/MM/YYYY"),
      hour: req.body.hour,
      slot: req.body.slot,
      timeslot: req.body.timeslot,
      time: moment(req.body.Date).format("h:mm:ss a"),
      day: req.body.day,
    };
    const service = await Service.findByIdAndUpdate(
      { _id: id },
      { $set: data }
    );
    return res.status(200).json({ Message: "Updated" });
  } catch (error) {
    console.log(error);
  }
};

const deleteOne = async (req, res) => {
  try {
    let id = req.params.id;
    const service = await Service.findByIdAndDelete({ _id: id });
    return res.status(200).json({ Message: "Deleted" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { add, getAll, getOne, update, deleteOne };
