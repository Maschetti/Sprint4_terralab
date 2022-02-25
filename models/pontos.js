const conexao = require('../infraestrutura/conexao')

class Pontos {
    adiciona(dados) {
        const sql = 'INSERT INTO Pontos SET ?'

        conexao.query(sql, dados, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            }
            else {
                console.log(resultados)
            }
        })
    }

    atualiza(dados) {
        const sql = `UPDATE Pontos SET ? WHERE email=? AND id=?`
        conexao.query(sql, [dados, dados.email, dados.id], (erro, resultados) => {
            if(erro) {
                console.log(erro)
            }
            else {
                console.log(resultados)
            }
        })
    }

    deleta(dados) {
        const sql = `DELETE FROM Pontos WHERE id=? AND email=?`
        conexao.query(sql, [dados.id, dados.email], (erro, resultados) => {
            if(erro) {
                console.log(erro)
            }
            else {
                console.log(resultados)
            }
        })
    }

    visualiza(dados, res) {
        if(dados.id == undefined){
            const sql = `SELECT * FROM Pontos WHERE email=?`
            conexao.query(sql, dados.email, (erro, resultados) => {
                const atendimento = resultados
                if(erro) {
                    res.status(400).json(erro)
                }
                else { 
                    res.status(200).json(atendimento)
                }
            })
        } 
        else {
            const sql = `SELECT * FROM Pontos WHERE id=? AND email=?`
            conexao.query(sql, [dados.id, dados.email], (erro, resultados) => {
                const atendimento = resultados
                if(erro) {
                    res.status(400).json(erro)
                }
                else { 
                    res.status(200).json(atendimento)
                }
            })    
        }
    }
}

module.exports = new Pontos