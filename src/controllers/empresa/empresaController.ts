import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import EmpresaRepository from '../../repositories/EmpresaRepository';

const secretKey = process.env.JWT_SECRET;
if (!secretKey) throw new Error('JWT_SECRET não definida');

export const login = async (req: Request, res: Response) => {
  const { email, senha } = req.body;

  try {
  
    const empresa = await EmpresaRepository.findByEmail(email);

    if (!empresa || empresa.senha !== senha || !empresa.status) {
      return res.status(401).json({ message: 'Credenciais inválidas ou empresa inativa' });
    }

    /
    const token = jwt.sign(
      { cnpj: empresa.cnpj, email: empresa.email },
      secretKey,
      { expiresIn: '1h' }
    );

    
    return res.status(200).json({
      token,
      empresa: {
        cnpj: empresa.cnpj,
        nome: empresa.nome,
        email: empresa.email
      }
    });
  } catch (error) {
    console.error('Erro no login:', error);
    return res.status(500).json({ message: 'Erro interno no servidor' });
  }
};
const createEmpresa= async (req: Request, res: Response): Promise<void> => {
  try {
    const { cnpj, senha } = req.body;

    const novaEmpresa= await EmpresaRepository.create({ cnpj, senha});

    res.status(201).json({
      message: 'Empresa cadastrada com sucesso',
      empresa: novaEmpresa
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Erro ao cadastradar empresa',
      error: error.message
    });
  }
};

const listarEmpresas = async (_req: Request, res: Response): Promise<void> => {
  try {
    const empresas= await EmpresaRepository.findAll();

    res.status(200).json(empresas);
  } catch (error: any) {
    res.status(500).json({
      message: 'Erro ao buscar empresas',
      error: error.message
    });
  }
};

const findByCnpj = async (req: Request, res: Response): Promise<void> => {
  try {
    const { cnpj } = req.params;

    const empresa = await EmpresaRepository.findByCnpj(Number(cnpj));

    if (!empresa) {
      res.status(404).json({ message: 'Empresa não encontrada' });
      return;
    }

    res.status(200).json(empresa);
  } catch (error: any) {
    res.status(500).json({
      message: 'Erro ao buscar empresa',
      error: error.message
    });
  }
};

const updateEmpresa= async (req: Request, res: Response): Promise<void> => {
  try {
    const { cnpj } = req.params;
    const dados = req.body;

    const updated = await EmpresaRepository.update(dados, Number(cnpj));

    if (!updated) {
      res.status(404).json({ message: 'Empresa não encontrada para atualização' });
      return;
    }

    res.status(200).json({ message: 'Empresa atualizada com sucesso' });
  } catch (error: any) {
    res.status(500).json({
      message: 'Erro ao atualizar empresa',
      error: error.message
    });
  }
};

const deleteEmpresa = async (req: Request, res: Response): Promise<void> => {
  try {
    const {cnpj} = req.params;

    const deleted = await EmpresaRepository.destroy(Number(cnpj));

    if (!deleted) {
      res.status(404).json({ message: 'Empresa não encontrada para exclusão' });
      return;
    }

    res.status(200).json({ message: 'Empresa excluída com sucesso' });
  } catch (error: any) {
    res.status(500).json({
      message: 'Erro ao excluir empresa',
      error: error.message
    });
  }
};

export default {
  createEmpresa,
  listarEmpresas,
  findByCnpj,
  updateEmpresa,
  deleteEmpresa
};