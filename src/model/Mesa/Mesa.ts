import connection from "../../config/database";
import { DataTypes } from "@sequelize/core";
import MesaModelInterface from "./interface/MesaModelInterface";

const Mesa = connection.define<MesaModelInterface>('Mesa', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ocupado: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default Mesa 
