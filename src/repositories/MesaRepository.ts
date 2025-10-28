import Mesa from '../model/Mesa/Mesa';
import MesaModelInterface from '../model/Mesa/interface/MesaModelInterface';

const create = async (mesa: Partial<MesaModelInterface>): Promise<MesaModelInterface> => {
  try {
    const newMesa = await Mesa.create(mesa);
    return newMesa;
  } catch (error: any) {
    throw new Error(error);
  }
};

const findAll = async (): Promise<MesaModelInterface[]> => {
  try {
    const mesas = await Mesa.findAll();
    return mesas;
  } catch (error: any) {
    throw new Error(error);
  }
};

const findById = async (id: number): Promise<MesaModelInterface | null> => {
  try {
    const mesa = await Mesa.findByPk(id);
    return mesa;
  } catch (error: any) {
    throw new Error(error);
  }
};

const update = async (mesa: Partial<MesaModelInterface>, id: number): Promise<boolean> => {
  try {
    const updatedMesa = await Mesa.update(mesa, {
      where: { id }
    });

    if (updatedMesa[0] === 0) {
      return false;
    }

    return true;
  } catch (error: any) {
    throw new Error(error);
  }
};

const destroy = async (id: number): Promise<boolean> => {
  try {
    const deletedMesa = await Mesa.destroy({
      where: { id }
    });

    if (!deletedMesa) {
      return false;
    }

    return true;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default {
  create,
  findAll,
  findById,
  update,
  destroy
};