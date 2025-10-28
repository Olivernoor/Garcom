import { Model } from "@sequelize/core";

interface MesaModelInterface extends Model {
    id: number,
    numero: number,
    ocupado: boolean,
    createdAt: string,
    updatedAt: string
}

export default MesaModelInterface;