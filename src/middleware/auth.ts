import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import EmpresaRepository from '../repositories/EmpresaRepository';
import EmpresaModelInterface from '../model/Empresa/interface/EmpresaModelInterface';

declare global {
  namespace Express {
    export interface Request {
      empresa?: EmpresaModelInterface;
    }
  }
}

interface DecodedInterface extends JwtPayload {
  email: string;
}

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Token é obrigatório' });
    }

    const token = authHeader.split(' ')[1];
    const JWT_SECRET = process.env.JWT_SECRET;

    if (!JWT_SECRET) {
      return res.status(500).json({ message: 'Erro interno. Tente novamente mais tarde.' });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as DecodedInterface;

    const empresa = await EmpresaRepository.findByEmail(decoded.email);
    if (!empresa || !empresa.status) {
      return res.status(401).json({ message: 'Não autorizado' });
    }

    req.empresa = empresa;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido ou expirado' });
  }
};

export default auth;