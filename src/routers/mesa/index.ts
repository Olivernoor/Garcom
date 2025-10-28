import express, { Router } from 'express';
import mesaController from '../../controllers/mesa/mesaController';

const mesaRouter: Router = express.Router();

mesaRouter.post('/mesa', mesaController.createMesa);


mesaRouter.get('/mesa', mesaController.listarMesas);


mesaRouter.get('/mesa/:id', mesaController.buscarMesaPorId);


mesaRouter.put('/mesa/:id', mesaController.atualizarMesa);


mesaRouter.delete('/mesa/:id', mesaController.deletarMesa);

export default mesaRouter;