const express = require("express");
const router = express.Router();
const { HoldingsModel } = require("../model/HoldingsModel");

// 📌 Insert dummy holdings (only if DB is empty)
router.get("/addDummy", async (req, res) => {
  try {
    const count = await HoldingsModel.countDocuments({ userId: "dummy" });
    if (count > 0) {
      return res.send("Dummy holdings already exist!");
    }

    const tempHoldings = [
      { userId: "dummy",name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
      {userId: "dummy", name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
      { userId: "dummy",name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.4, net: "+3.49%", day: "+0.21%" },
      { userId: "dummy",name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%", isLoss: true },
      {userId: "dummy", name: "ITC", qty: 5, avg: 202.0, price: 207.9, net: "+2.92%", day: "+0.80%" },
      { userId: "dummy",name: "KPITTECH", qty: 5, avg: 250.3, price: 266.45, net: "+6.45%", day: "+3.54%" },
      { userId: "dummy",name: "M&M", qty: 2, avg: 809.9, price: 779.8, net: "-3.72%", day: "-0.01%", isLoss: true },
      { userId: "dummy",name: "RELIANCE", qty: 1, avg: 2193.7, price: 2112.4, net: "-3.71%", day: "+1.44%" },
      { userId: "dummy",name: "SBIN", qty: 4, avg: 324.35, price: 430.2, net: "+32.63%", day: "-0.34%", isLoss: true },
      {userId: "dummy", name: "SGBMAY29", qty: 2, avg: 4727.0, price: 4719.0, net: "-0.17%", day: "+0.15%" },
      {userId: "dummy", userId: "dummy",name: "TATAPOWER", qty: 5, avg: 104.2, price: 124.15, net: "+19.15%", day: "-0.24%", isLoss: true },
      { userId: "dummy",userId: "dummy",name: "TCS", qty: 1, avg: 3041.7, price: 3194.8, net: "+5.03%", day: "-0.25%", isLoss: true },
      { userId: "dummy",name: "WIPRO", qty: 4, avg: 489.3, price: 577.75, net: "+18.08%", day: "+0.32%" }
    ];

    await HoldingsModel.insertMany(tempHoldings);
    res.send("Dummy holdings inserted!");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get dummy holdings
router.get("/", async (req, res) => {
  try {
    const dummyHoldings = await HoldingsModel.find({ userId: "dummy" });
    res.json(dummyHoldings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Get user-specific holdings
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const userHoldings = await HoldingsModel.find({ userId });
    res.json(userHoldings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
