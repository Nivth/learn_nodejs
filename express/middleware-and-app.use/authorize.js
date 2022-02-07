//midleware ini coyyyyyy , di file terpisah
const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "asep") {
    req.user = { name: "Asep", id: 3 };
    next();
    // http://localhost:3000/secret/?user=asep
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
