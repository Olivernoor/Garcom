import { Request, Response } from "express"

const createMesa = async (req: Request, res: Response): Promise<void>=> {
    res.json({
        message: "Mesa iniciada com sucesso"
    })
}

export default{
    createMesa
}