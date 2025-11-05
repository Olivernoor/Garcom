import express, {Router} from "express";
import empresaController from "../../controllers/empresa/empresaController";

const empresaRouter: Router = express.Router();


empresaRouter.post('/empresa', empresaController.createEmpresa);


empresaRouter.get('/empresa', empresaController.listarEmpresas);


empresaRouter.get('/empresa/:cnpj', empresaController.findByCnpj);


empresaRouter.put('/empresa/:cnpj', empresaController.updateEmpresa);


empresaRouter.delete('/empresa/:cnpj', empresaController.deleteEmpresa);

export default empresaRouter;

