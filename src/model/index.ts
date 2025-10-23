import 'dotenv/config'
import connection from "../config/database";
import Mesa from './Mesa/Mesa';

connection.sync({
    force: false,
    alter: true
}).then(() => {
    console.log("tabelas sincronizadas")
})

export default {
    Mesa
}