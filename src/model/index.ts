import 'dotenv/config'
import connection from "../config/database";
import Mesa from './Mesa/Mesa';
import Empresa from './Empresa/Empresa';

connection.sync({
    force: false,
    alter: true
}).then(() => {
    console.log("tabelas sincronizadas")
})

export default {
    Mesa,
    Empresa
}