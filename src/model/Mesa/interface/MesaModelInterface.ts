import { Model } from "@sequelize/core";

interface MesaModelInterface extends Model {
    id: number,
    createdAt: string,
    updatedAt: string
}

export default MesaModelInterface;