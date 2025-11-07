import 'dotenv/config'
import connection from "../config/database";
import Mesa from './Mesa/Mesa';
import Empresa from './Empresa/Empresa';
import Product from './product/Product';
import Pedido from './pedido/Pedido';

Mesa.hasMany(Pedido,{
    foreignKey:  'pedidomesaId'
});
Pedido.hasMany(Product,{
    foreignKey: 'pedidosId'
});

connection.sync({
    force: false,
    alter: true
}).then(() => {
    console.log("tabelas sincronizadas")
});
export default {
    Mesa,
    Empresa,
    Product,
    Pedido
}