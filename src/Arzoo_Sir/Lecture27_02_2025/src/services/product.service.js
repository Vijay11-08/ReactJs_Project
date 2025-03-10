const db = require("../helpers/db.helper");
const { Op } = require("sequelize");

module.exports = {
  create,
  fetchAll,
  findOne,
  deleteProduct,
  update,
};
async function create(params) {
  if (
    await db.product.findOne({
      where: { product_name: params.product_name },
    })
  ) {
    return "product " + params.product_name + " is already exists";
  }
  const product = new db.product(params);

  await product.save();
  return product;
}
async function fetchAll() {
  return await db.product.findAll();
}
async function findOne(id, callback) {
  getProduct(id)
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}
async function update(id, params) {
  const product = await getProduct(id);
  const nameChanged =
    params.product_name && params.product_name !== product.product_name;
  if (
    nameChanged &&
    (await db.product.findOne({
      where: { product_name: params.product_name },
    }))
  ) {
    return "product with name " + params.product_name + " is already exists";
  }
  Object.assign(product, params);
  await product.save();
  return product;
}
async function deleteProduct(id) {
  const product = await getProduct(id);

  if (product.product_status) {
    product.product_status = false;
  } else {
    product.product_status = true;
  }
  await product.save();
  return product;
}
async function getProduct(id) {
  const product = await db.product.findByPk(id);
  if (!product) return "product not found";
  return product;
}
