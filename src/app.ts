import express, {Express} from 'express'
import mesaRouter from './routers/mesa'
const app: Express = express()

app.use(express.json())
app.use(mesaRouter)

export default app