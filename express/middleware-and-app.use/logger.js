//midleware ini coyyyyyy , di file terpisah
const logger = (req, res, next) => {
  const method = req.method;
  const time = new Date().getFullYear();
  const url = req.url;
  console.log(`${method} ${url} ${time}`);
  next();
};

module.exports = logger;
