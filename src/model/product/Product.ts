import connection from "../../config/database";
import { DataTypes } from "@sequelize/core";
import ProductModelInterface from "./interface/ProductModelInterface";

const Product = connection.define<ProductModelInterface>('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default Product;