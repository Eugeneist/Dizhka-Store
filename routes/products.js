const fs = require("fs");
const path = require("path");
const { Router } = require("express");

const router = Router();

// api/products
router.get("/", (req, res) => {
  const pathJSON = path.resolve(__dirname, "../products.json");
  fs.readFile(pathJSON, (err, data) => {
    res.json(JSON.parse(data));
  });
});

router.post("/", (req, res) => {
  console.log(req.body);

  const pathJSON = path.resolve(__dirname, "../products.json");
  fs.readFile(pathJSON, (err, data) => {
    const products = JSON.parse(data);
    const id = products.length + 1;
    products.push({
      id,
      ...req.body,
    });

    // to json
    const json = JSON.stringify(products);

    fs.writeFile(pathJSON, json, () => {
      res.json({ id });
    });
  });
});

module.exports = router;
