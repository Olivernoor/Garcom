import connection from "../../config/database";
import { DataTypes } from "@sequelize/core";
import EmpresaModelInterface from "./interface/EmpresaModelInterface";

const Empresa = connection.define<EmpresaModelInterface>('Empresa', {
  cnpj: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

export default Empresa;