const express = require("express");
const app = express();
const { products } = require("./data.js");

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><a href='/api/products'>products</a>");
});

app.get("/api/products", (req, res) => {
  const newPeoduscts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(products);
});

app.get("/api/products/:productID", (req, res) => {
  const productID = req.params.productID;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (singleProduct) {
    res.json(singleProduct);
  } else {
    res.status(404).send("<h1>Product not found</h1>");
  }
});

app.get("/api/products/:productID/reviews/:reviewsID", (req, res) => {
  console.log(req.params.reviewsID);
  res.send("<h1>Reviews</h1>");
});

app.get("/api/v1/query", (req, res) => {
  const { seacrh, limit } = req.query;
  let sortedProducts = [...products];
  if (seacrh) {
    sortedProducts = sortedProducts.filter((product) => {
      return profuct.name.startWith(seacrh);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if(sortedProducts.length < 1){
    // res.status(200).send("<h1>No products found</h1>");\
    return res.status(200).json({sucess: true,data:[]});
  }
  res.status(200).json(sortedProducts);
  res.send(sortedProducts);
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
