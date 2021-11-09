const categoriesService = require("./categories.service");
const asyncErrorBoundary = require('../errors/asyncErrorBoundary')

// access methods on the service object
// with list()
// chaining then() to list() executes the Knex query
// chaining catch(next) onto the promise will call next() passing in the error
// If the Knex promise doesn't have a catch(next) at the end, it will not 
// correctly handle errors that occur when running a query
/*
function list(req, res, next) {
  categoriesService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}
*/
async function list(req, res) {
  // categoriesService.list() is asynchronous operation
  // await forces the execution of the code to pause on this line until the operation is finished
  const data = await categoriesService.list()
  res.json({ data })
}

module.exports = {
  list: asyncErrorBoundary(list),
};
