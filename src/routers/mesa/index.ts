import express, {Router} from 'express'
import mesaController from '../../controllers/mesa/mesaController'

const mesaRouter: Router = express.Router()

mesaRouter.post('/mesa',mesaController.createMesa)


export default mesaRouter