const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  ScheduleType: {
    type: String,
  },
  Date: [
    {
      type: Date,
    },
  ],
  hour: {
    type: Number,
  },
  slot: {
    type: String,
  },
  timeslot: {
    type: String,
  },
  time: { type: Date },
  day: [
    {
      type: String,
    },
  ],
});

const Service = new mongoose.model("Services", serviceSchema);
module.exports = Service;
