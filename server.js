const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Lumora API online");
});

app.post("/rank", (req, res) => {
  const { userId, rank } = req.body;

  console.log(userId, rank);

  res.json({ success: true });
});

app.listen(process.env.PORT || 3000);
