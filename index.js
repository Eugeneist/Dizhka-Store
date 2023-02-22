const express = require("express");
const cors = require("cors");
const productsRoutes = require("./routes/products");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/products", productsRoutes);

app.listen(PORT, () => {
  console.log(`API is listerning on port http://localhost:${PORT}`);
  console.log(`API is here: http://localhost:${PORT}/api/products`);
});
