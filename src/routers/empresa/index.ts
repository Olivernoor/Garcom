import express, {Router} from "express";
import empresaController from "../../controllers/empresa/empresaController";

const empresaRouter: Router = express.Router();


empresaRouter.post('/empresa', empresaController.createEmpresa);


empresaRouter.get('/empresa', empresaController.listarEmpresas);


empresaRouter.get('/empresa/:id', empresaController.findByCnpj);


empresaRouter.put('/empresa/:id', empresaController.updateEmpresa);


empresaRouter.delete('/empresa/:id', empresaController.deleteEmpresa);

export default empresaRouter;

