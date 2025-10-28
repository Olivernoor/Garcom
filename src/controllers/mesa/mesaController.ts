import { Request, Response } from 'express';
import MesaRepository from '../../repositories/MesaRepository';

const createMesa = async (req: Request, res: Response): Promise<void> => {
  try {
    const { numero, ocupado } = req.body;

    const novaMesa = await MesaRepository.create({ numero, ocupado});

    res.status(201).json({
      message: 'Mesa criada com sucesso',
      mesa: novaMesa
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Erro ao criar mesa',
      error: error.message
    });
  }
};

const listarMesas = async (_req: Request, res: Response): Promise<void> => {
  try {
    const mesas = await MesaRepository.findAll();

    res.status(200).json(mesas);
  } catch (error: any) {
    res.status(500).json({
      message: 'Erro ao buscar mesas',
      error: error.message
    });
  }
};

const buscarMesaPorId = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const mesa = await MesaRepository.findById(Number(id));

    if (!mesa) {
      res.status(404).json({ message: 'Mesa não encontrada' });
      return;
    }

    res.status(200).json(mesa);
  } catch (error: any) {
    res.status(500).json({
      message: 'Erro ao buscar mesa',
      error: error.message
    });
  }
};

const atualizarMesa = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const dados = req.body;

    const atualizada = await MesaRepository.update(dados, Number(id));

    if (!atualizada) {
      res.status(404).json({ message: 'Mesa não encontrada para atualização' });
      return;
    }

    res.status(200).json({ message: 'Mesa atualizada com sucesso' });
  } catch (error: any) {
    res.status(500).json({
      message: 'Erro ao atualizar mesa',
      error: error.message
    });
  }
};

const deletarMesa = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const deletada = await MesaRepository.destroy(Number(id));

    if (!deletada) {
      res.status(404).json({ message: 'Mesa não encontrada para exclusão' });
      return;
    }

    res.status(200).json({ message: 'Mesa excluída com sucesso' });
  } catch (error: any) {
    res.status(500).json({
      message: 'Erro ao excluir mesa',
      error: error.message
    });
  }
};

export default {
  createMesa,
  listarMesas,
  buscarMesaPorId,
  atualizarMesa,
  deletarMesa
};