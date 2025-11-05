import Empresa from "../model/Empresa/Empresa";
import EmpresaModelInterface from "../model/Empresa/interface/EmpresaModelInterface";

const create = async (empresa: Partial<EmpresaModelInterface>): Promise<EmpresaModelInterface> => {
  try {
    const newEmpresa = await Empresa.create(empresa);
    return newEmpresa;
  } catch (error: any) {
    throw new Error(error);
  }
};

const findAll = async (): Promise<EmpresaModelInterface[]> => {
  try {
    const empresas = await Empresa.findAll();
    return empresas;
  } catch (error: any) {
    throw new Error(error);
  }
};

const findByCnpj = async (cnpj: number): Promise<EmpresaModelInterface | null> => {
  try {
    const empresa = await Empresa.findByPk(cnpj);
    return empresa;
  } catch (error: any) {
    throw new Error(error);
  }
};

const findByEmail = async (email: string): Promise<EmpresaModelInterface | null> => {
  try {
    const empresa = await Empresa.findOne({ where: { email } });
    return empresa;
  } catch (error: any) {
    throw new Error(error);
  }
};

const update = async (empresa: Partial<EmpresaModelInterface>, cnpj: number): Promise<boolean> => {
  try {
    const updatedEmpresa = await Empresa.update(empresa, {
      where: { cnpj }
    });

    return updatedEmpresa[0] !== 0;
  } catch (error: any) {
    throw new Error(error);
  }
};

const destroy = async (cnpj: number): Promise<boolean> => {
  try {
    const deletedEmpresa = await Empresa.destroy({
      where: { cnpj }
    });

    return !!deletedEmpresa;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default {
  create,
  findAll,
  findByCnpj,
  findByEmail,
  update,
  destroy
};