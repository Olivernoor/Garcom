import express, {Express} from 'express'
import mesaRouter from './routers/mesa'
import empresaRouter from './routers/empresa'
import productRouter from './routers/product'
const app: Express = express()

app.use(express.json())
app.use(mesaRouter)
app.use(empresaRouter)
app.use(productRouter)

export default app