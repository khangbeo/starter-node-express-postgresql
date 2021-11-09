const asyncErrorBoundary = require('../errors/asyncErrorBoundary');
const productsService = require('./products.service')

function read(req, res) {
  const { product: data } = res.locals;
  res.json({ data });
}
/*
function list(req, res, next) {
  productsService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}

// chaining then() to productsService.read(productID) to retrieve 
// a product given an id
// the query returns a promise, which is handled in then()
// if product exists, it's stored in res.locals.product
function productExists(req, res, next) {
  productsService
    .read(req.params.productId)
    .then((product) => {
      if (product) {
        res.locals.product = product;
        return next();
      }
      next({ status: 404, message: `Product cannot be found.` });
    })
    .catch(next);
}
*/

async function productExists(req, res, next) {
  const product = await productsService.read(req.params.productId)
  if (product) {
    res.locals.product = product
    return next()
  }
  next({ status: 404, message: `Product cannot be found.` })
}

async function list(req, res, next) {
  const data = await productsService.list()
  res.json({ data })
}

async function listOutOfStockCount(req, res, next) {
  res.json({ data: await productsService.listOutOfStockCount() });
}

async function listPriceSummary(req, res, next) {
  res.json({ data: await productsService.listPriceSummary() });
}

async function listTotalWeightByProduct(req, res) {
  res.json({ data: await productsService.listTotalWeightByProduct() });
}

module.exports = {
  read: [asyncErrorBoundary(productExists), read],
  list: asyncErrorBoundary(list),
  listOutOfStockCount: asyncErrorBoundary(listOutOfStockCount),
  listPriceSummary: asyncErrorBoundary(listPriceSummary),
  listTotalWeightByProduct: asyncErrorBoundary(listTotalWeightByProduct)
};
