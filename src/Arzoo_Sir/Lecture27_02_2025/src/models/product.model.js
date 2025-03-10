const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    product_name: { type: DataTypes.STRING, allowNull: false },
    product_description: { type: DataTypes.STRING, allowNull: true },
    product_price: { type: DataTypes.INTEGER, allowNull: false },

    product_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  };
  return sequelize.define("product", attributes);
}
