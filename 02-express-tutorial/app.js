const express = require("express");
const { products } = require("./data");
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked!" });
});

app.get("/api/v1/products/", (req, res) => {
  res.json(products);
});

app.all("/not-there", (req, res) => {
  res.status(404).send("Page not found! 404 error");
});

app.get("/api/v1/products/:productID", (req, res) => {
  const idToFind = parseInt(req.params.productID);
  if (isNaN(idToFind)) {
    return res.status(400).json({ message: "Invalid product ID." });
  }
  const product = products.find((p) => p.id === idToFind);
  if (product !== undefined) {
    res.json(product);
  } else {
    res.status(404).json({ message: "That product was not found." });
  }
});

app.get("/api/v1/regex/:regex", (req, res) => {
  const paramRegex = req.params.regex;
  try {
    const regex = new RegExp(paramRegex);
    const matchingProducts = products.filter(p => regex.test(p.name));
    if (matchingProducts.length > 0) {
      res.json(matchingProducts);
    } else {
      res.status(404).json({ message: "No products matching the regex were found." })
    }
  }catch{
    res.status(400).json({message: "Invalid pattern."})
  }
});

app.get("/api/v1/query", (req, res) => {
  const search = req.query.search ? req.query.search.toLowerCase() : '';
  const limit = req.query.limit ? parseInt(req.query.limit) : products.length;
  if (isNaN(limit) || limit < 1) {
    res.status(400).json({ message: "Invalid limit value." });
  }
  const filteredProducts = products.filter((p) => {
    return p.name.toLowerCase().startsWith(search);
  });
  const limitedProducts = filteredProducts.slice(0, limit);
  res.json(limitedProducts);
});


app.use(express.static("./public"));
