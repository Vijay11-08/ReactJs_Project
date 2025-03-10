const db = require("../helpers/db.helper");
const { Op } = require("sequelize");

module.exports = {
  create,
  fetchAll,
  findOne,
  deleteCategory,
  update,
};
async function create(params) {
  if (
    await db.Category.findOne({
      where: { category_name: params.category_name },
    })
  ) {
    return "Category " + params.category_name + " is already exists";
  }
  const category = new db.Category(params);

  await category.save();
  return category;
}
async function fetchAll() {
  return await db.Category.findAll();
}
async function findOne(id, callback) {
  getCategory(id)
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}
async function update(id, params) {
  const category = await getCategory(id);
  const nameChanged =
    params.category_name && params.category_name !== category.category_name;
  if (
    nameChanged &&
    (await db.Category.findOne({
      where: { category_name: params.category_name },
    }))
  ) {
    return "Category with name " + params.category_name + " is already exists";
  }
  Object.assign(category, params);
  await category.save();
  return category;
}
async function deleteCategory(id) {
  const category = await getCategory(id);

  if (category.category_status) {
    category.category_status = false;
  } else {
    category.category_status = true;
  }
  await category.save();
  return category;
}
async function getCategory(id) {
  const category = await db.Category.findByPk(id);
  if (!category) return "Category not found";
  return category;
}
