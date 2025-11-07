import Pedido from "../model/pedido/Pedido";
import PedidoModelInterface from "../model/pedido/interface/PedidoModelInterface";

const create = async (pedido: Partial<PedidoModelInterface> ): Promise <PedidoModelInterface> => {
    try {
        const newPedido = await Pedido.create(pedido);
        return newPedido;
    } catch (error: any) {
        throw new Error(error);
  }
};
const