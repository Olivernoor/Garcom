import Product from "../model/product/Product";
import ProductModelInterface from "../model/product/interface/ProductModelInterface";


const create = async (product: Partial<ProductModelInterface>): Promise<ProductModelInterface> => {
  try {
    const newProduct = await Product.create(product);
    return newProduct;
  } catch (error: any) {
    throw new Error(error);
  }
};


const findAll = async (): Promise<ProductModelInterface[]> => {
  try {
    const products = await Product.findAll();
    return products;
  } catch (error: any) {
    throw new Error(error);
  }
};


const findById = async (id: number): Promise<ProductModelInterface | null> => {
  try {
    const product = await Product.findByPk(id);
    return product;
  } catch (error: any) {
    throw new Error(error);
  }
};


const update = async (
  product: Partial<ProductModelInterface>,id: number): Promise<boolean> => {
  try {
    const updatedProduct = await Product.update(product, {
      where: { id }
    });

    return updatedProduct[0] !== 0;
  } catch (error: any) {
    throw new Error(error);
  }
};


const destroy = async (id: number): Promise<boolean> => {
  try {
    const deletedProduct = await Product.destroy({
      where: { id }
    });

    return !!deletedProduct;
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