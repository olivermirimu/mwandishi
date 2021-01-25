const mongoose = require("mongoose");
const { Schema } = mongoose;

const LoginsSchema = new Schema({
  identityKey: {
    type: String,
    unique: true,
    required: true,
  },
  failedAttempts: {
    type: Number,
    required: true,
    default: 0,
  },
  timeOut: {
    type: Date,
    required: true,
    default: new Date(),
  },
  inProgress: {
    type: Boolean,
  },
});

LoginsSchema.static("canAuthenticate", async () => {});
LoginsSchema.static("failedAttempts", async (key) => {
  return this.findOneAndUpdate(
    { identityKey: key },
    { $inc: { failedAttempts: 1 } }
  );
});

module.exports = { Logins: mongoose.model("Logins", LoginsSchema) };
