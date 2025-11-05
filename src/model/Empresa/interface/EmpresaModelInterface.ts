import { Model } from "@sequelize/core";

interface EmpresaModelInterface extends Model {
  cnpj: number;
  nome: string;
  email: string;
  senha: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

export default EmpresaModelInterface;