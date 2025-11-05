import express, {Express} from 'express'
import mesaRouter from './routers/mesa'
import empresaRouter from './routers/empresa'
const app: Express = express()

app.use(express.json())
app.use(mesaRouter)
app.use(empresaRouter)

export default app