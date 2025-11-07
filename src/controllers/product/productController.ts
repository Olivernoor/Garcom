import { Request, Response } from 'express';
import ProductRepository from '../../repositories/ProductRepository';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await ProductRepository.create(req.body);
    return res.status(201).json(product);
  } catch (error: any) {
    console.error('Erro ao criar produto:', error);
    return res.status(500).json({ message: 'Erro ao criar produto' });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductRepository.findAll();
    return res.status(200).json(products);
  } catch (error: any) {
    console.error('Erro ao buscar produtos:', error);
    return res.status(500).json({ message: 'Erro ao buscar produtos' });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await ProductRepository.findById(Number(id));

    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    return res.status(200).json(product);
  } catch (error: any) {
    console.error('Erro ao buscar produto:', error);
    return res.status(500).json({ message: 'Erro ao buscar produto' });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const success = await ProductRepository.update(req.body, Number(id));

    if (!success) {
      return res.status(404).json({ message: 'Produto não encontrado para atualização' });
    }

    return res.status(200).json({ message: 'Produto atualizado com sucesso' });
  } catch (error: any) {
    console.error('Erro ao atualizar produto:', error);
    return res.status(500).json({ message: 'Erro ao atualizar produto' });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const success = await ProductRepository.destroy(Number(id));

    if (!success) {
      return res.status(404).json({ message: 'Produto não encontrado para exclusão' });
    }

    return res.status(200).json({ message: 'Produto excluído com sucesso' });
  } catch (error: any) {
    console.error('Erro ao excluir produto:', error);
    return res.status(500).json({ message: 'Erro ao excluir produto' });
  }
};
export default {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct


}