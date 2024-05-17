const express = require("express");
const app = express();
const PORT = 3000;
const headersArray = [];
const v8 = require("v8");

console.log({ pid: process.pid });

app.get("/", (req, res) => {
  headersArray.push({
    userAgentUsed: req.get("User-Agent"),
  });

  // headersArray.push(...headersArray);
  res.status(200).send("ok");
});

process.on("SIGUSR2", () => {
  v8.writeHeapSnapshot();
});

app.listen(PORT, () => {
  console.log(`
Server listening on http: //localhost:${PORT}/`);
});
