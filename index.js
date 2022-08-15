const MainClient = require("./nanospace");
const client = new MainClient();

const express = require("express")
const web = express()

web.listen(3000, () => {})
web.get("/", (req, res) => {
  res.send("Đang hoạt động!")
})

client.connect()

module.exports = client; 
