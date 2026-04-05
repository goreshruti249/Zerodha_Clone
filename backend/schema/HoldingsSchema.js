const { Schema } = require("mongoose");

const HoldingsSchema = new Schema(
  {
    userId: { type: String, required: true, index: true }, // link to user
    name: { type: String, required: true },                // stock symbol
    qty: { type: Number, required: true, default: 0 },     // number of shares
    avg: { type: Number, required: true, default: 0 }, 
     price: { type: Number, required: true, default: 0 },   // current price
    net: { type: String },                                 // profit/loss %
    day: { type: String },                                 // day change %
    isLoss: { type: Boolean, default: false },    // avg buy price
  },
  { timestamps: true }
);

// Ensure each user has at most one row per stock
HoldingsSchema.index({ userId: 1, name: 1 }, { unique: true });

module.exports = { HoldingsSchema };
