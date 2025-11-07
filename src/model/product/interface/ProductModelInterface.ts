import { Model } from "@sequelize/core";

interface ProductModelInterface extends Model {
    id: number,
    quatity: number,
    name: string,
    price: number,
    createdAt: string,
    updatedAt: string
}

export default  ProductModelInterface;