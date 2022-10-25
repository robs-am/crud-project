import {bancoDeDados} from "../bancoDeDados.js";

export const getUsers = (_, res) => {
    const q ="SELECT * FROM usuarios"; //seleciona todos os usuários da query//

    bancoDeDados.query(q, (err, data) => {
    if(err) return res.json(err);
    
    return res.status(200).json(data);  //caso não haja erro, retorna a listagem de todos os usuários
});

}