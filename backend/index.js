require("dotenv").config();

const express = require("express");
// for connection Establising requirements.
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { HoldingsModel } = require("./model/HoldingsModel");

const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
let dbConnected = false;
const memoryUsers = [];
const memoryHoldings = [
  { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
  { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
  { name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%", isLoss: true },
];
const memoryPositions = [
  { product: "CNC", name: "EVEREADY", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
  { product: "CNC", name: "JUBLFOOD", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true },
];

const app = express();

//Route To Get Dummy Data

const cookieParser = require("cookie-parser");
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:3003", "http://localhost:3004"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// helpers
function signToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET || "dev_secret", {
    expiresIn: "7d",
  });
}

function setAuthCookie(res, token) {
  res.cookie("auth", token, {
    httpOnly: true,
    sameSite: "lax",
    // secure should be true in production (HTTPS)
    secure: false,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
}

function requireAuth(req, res, next) {
  try {
    const token = req.cookies?.auth;
    if (!token) return res.status(401).json({ error: "Unauthorized" });
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "dev_secret");
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Unauthorized" });
  }
}

// auth routes
app.post("/auth/signup", async (req, res) => {
  try {
    const { email, name, password } = req.body;
    if (!email || !name || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    if (dbConnected) {
      const existing = await UserModel.findOne({ email });
      if (existing) {
        return res.status(409).json({ error: "User already exists" });
      }
      const passwordHash = await bcrypt.hash(password, 10);
      const user = await UserModel.create({ email, name, passwordHash });
      const token = signToken({ id: user._id, email: user.email, name: user.name });
      setAuthCookie(res, token);
      return res.status(201).json({ id: user._id, email: user.email, name: user.name });
    } else {
      const exists = memoryUsers.find((u) => u.email === email);
      if (exists) {
        return res.status(409).json({ error: "User already exists" });
      }
      const passwordHash = await bcrypt.hash(password, 10);
      const user = { id: String(Date.now()), email, name, passwordHash };
      memoryUsers.push(user);
      const token = signToken({ id: user.id, email: user.email, name: user.name });
      setAuthCookie(res, token);
      return res.status(201).json({ id: user.id, email: user.email, name: user.name });
    }
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Missing email or password" });
    }
    if (dbConnected) {
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      const ok = await bcrypt.compare(password, user.passwordHash);
      if (!ok) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      const token = signToken({ id: user._id, email: user.email, name: user.name });
      setAuthCookie(res, token);
      return res.status(200).json({ id: user._id, email: user.email, name: user.name });
    } else {
      const user = memoryUsers.find((u) => u.email === email);
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      const ok = await bcrypt.compare(password, user.passwordHash);
      if (!ok) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      const token = signToken({ id: user.id, email: user.email, name: user.name });
      setAuthCookie(res, token);
      return res.status(200).json({ id: user.id, email: user.email, name: user.name });
    }
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/auth/logout", (req, res) => {
  res.clearCookie("auth");
  return res.status(200).json({ ok: true });
});

app.get("/auth/me", requireAuth, async (req, res) => {
  if (dbConnected) {
    const user = await UserModel.findById(req.user.id).select("email name");
    if (!user) return res.status(404).json({ error: "Not found" });
    return res.status(200).json({ id: user._id, email: user.email, name: user.name });
  } else {
    const user = memoryUsers.find((u) => u.id === req.user.id);
    if (!user) return res.status(404).json({ error: "Not found" });
    return res.status(200).json({ id: user.id, email: user.email, name: user.name });
  }
});

//data for Holdings...
// app.get("/addHoldings", async (req, res)=>{
//     let tempHoldings = [
//         {
//             name: "BHARTIARTL",
//             qty: 2,
//             avg: 538.05,
//             price: 541.15,
//             net: "+0.58%",
//             day: "+2.99%",
//         },
//         {
//             name: "HDFCBANK",
//             qty: 2,
//             avg: 1383.4,
//             price: 1522.35,
//             net: "+10.04%",
//             day: "+0.11%",
//         },
//         {
//             name: "HINDUNILVR",
//             qty: 1,
//             avg: 2335.85,
//             price: 2417.4,
//             net: "+3.49%",
//             day: "+0.21%",
//         },
//         {
//             name: "INFY",
//             qty: 1,
//             avg: 1350.5,
//             price: 1555.45,
//             net: "+15.18%",
//             day: "-1.60%",
//             isLoss: true,
//         },
//         {
//             name: "ITC",
//             qty: 5,
//             avg: 202.0,
//             price: 207.9,
//             net: "+2.92%",
//             day: "+0.80%",
//         },
//         {
//             name: "KPITTECH",
//             qty: 5,
//             avg: 250.3,
//             price: 266.45,
//             net: "+6.45%",
//             day: "+3.54%",
//         },
//         {
//             name: "M&M",
//             qty: 2,
//             avg: 809.9,
//             price: 779.8,
//             net: "-3.72%",
//             day: "-0.01%",
//             isLoss: true,
//         },
//         {
//             name: "RELIANCE",
//             qty: 1,
//             avg: 2193.7,
//             price: 2112.4,
//             net: "-3.71%",
//             day: "+1.44%",
//         },
//         {
//             name: "SBIN",
//             qty: 4,
//             avg: 324.35,
//             price: 430.2,
//             net: "+32.63%",
//             day: "-0.34%",
//             isLoss: true,
//         },
//         {
//             name: "SGBMAY29",
//             qty: 2,
//             avg: 4727.0,
//             price: 4719.0,
//             net: "-0.17%",
//             day: "+0.15%",
//         },
//         {
//             name: "TATAPOWER",
//             qty: 5,
//             avg: 104.2,
//             price: 124.15,
//             net: "+19.15%",
//             day: "-0.24%",
//             isLoss: true,
//         },
//         {
//             name: "TCS",
//             qty: 1,
//             avg: 3041.7,
//             price: 3194.8,
//             net: "+5.03%",
//             day: "-0.25%",
//             isLoss: true,
//         },
//         {
//             name: "WIPRO",
//             qty: 4,
//             avg: 489.3,
//             price: 577.75,
//             net: "+18.08%",
//             day: "+0.32%",
//         },
//     ];
//     tempHoldings.forEach((item) =>{
//         let newHolding=new HoldingsModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.day,
//             day: item.day,
//         });
//         newHolding.save();
//     });
//     res.send("Done!");
// });



 // data for Positions...
// app.get("/addPositions", async (req, res)=>{
//     let tempPositions=[
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//         },
//     ];

//     tempPositions.forEach((item) =>{
//         let newPosition = new PositionsModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss,
//         });

//         newPosition.save();
//     });
//     res.send("Done!");
// });

    //fetching  holdings data.
app.get("/allHoldings", requireAuth, async (req, res) => {
  if (dbConnected) {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } else {
    res.json(memoryHoldings);
  }
});

   //fetching positions data.
app.get("/allPositions", requireAuth, async (req, res) => {
  if (dbConnected) {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } else {
    res.json(memoryPositions);
  }
});
  //Insert Data via user
app.post("/newOrder", requireAuth, async (req, res) => {
  if (dbConnected) {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save();
    return res.send("Order saved!");
  } else {
    return res.send("Order accepted (dev mode, no DB)!");
  }
});

app.listen(PORT, () => {
  console.log(`App started! on port ${PORT}`);
  if (uri) {
    mongoose
      .connect(uri)
      .then(() => {
        dbConnected = true;
        console.log("DB connected!");
      })
      .catch((err) => {
        dbConnected = false;
        console.error("DB connection failed:", err.message);
      });
  } else {
    console.warn("No MONGO_URL provided. Running in dev mode without DB.");
  }
});