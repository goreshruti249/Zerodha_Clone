const express = require("express");
const router = express.Router();
const { OrdersModel } = require("../model/OrdersModel"); // ✅ destructure properly
const { HoldingsModel } = require("../model/HoldingsModel");

// 📌 Create a new order
router.post("/", async (req, res) => {
  try {
    const { userId, name, qty, price, mode } = req.body;

    if (!userId || !name || !qty || !price || !mode) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // ✅ Check holdings before creating SELL order
    let holding = await HoldingsModel.findOne({ userId, name });

    if (mode === "SELL") {
      if (!holding || holding.qty < qty) {
        return res.status(400).json({ error: "Not enough quantity to sell" });
      }
    }

    // ✅ Only create the order if valid
    const newOrder = new OrdersModel({ userId, name, qty, price, mode });
    await newOrder.save();

    // ✅ Update holdings after saving
    if (mode === "BUY") {
      if (!holding) {
        holding = new HoldingsModel({ userId, name, qty, avg: price });
      } else {
        const totalCost = holding.avg * holding.qty + price * qty;
        const totalQty = holding.qty + qty;
        holding.avg = totalCost / totalQty;
        holding.qty = totalQty;
      }
      await holding.save();
    }

    if (mode === "SELL") {
      holding.qty -= qty;
      if (holding.qty === 0) {
        await HoldingsModel.deleteOne({ _id: holding._id });
      } else {
        await holding.save();
      }
    }

    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📌 Get all orders for a user
router.get("/:userId", async (req, res) => {
  try {
    const orders = await OrdersModel.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;
