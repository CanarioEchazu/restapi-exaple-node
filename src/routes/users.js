const { Router } = require("express");
const axios = require("axios");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");
    res.json(users.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
