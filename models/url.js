const mongoose = require("mongoose");

const urlSchema = mongoose.Schema(
  {
    uniqueId: {
      type: String,
      unique: true,
      require: true,
    },
    rediredctURL: {
      type: String,
      require: true,
    },
    vistHistory: [{ timestamp: { type: Number } }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("urls_collection", urlSchema);
