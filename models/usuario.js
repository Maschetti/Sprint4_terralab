const conexao = require('../infraestrutura/conexao')

class Usuario {
    adiciona(dados) {
        const sql = 'INSERT INTO Users SET ?'

        conexao.query(sql, dados, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            }
            else {
                console.log(resultados)
            }
        })
    }

    deleta(email) {
        const step = 'SET foreign_key_checks = 0'
        conexao.query(step, () => {
            if(erro) {
                console.log(erro)
            }
            else {
                console.log(resultados)
            }
        })
        const sql = `DELETE FROM Users WHERE ?`
        conexao.query(sql, email, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            }
            else {
                console.log(resultados)
            }
        })
        const tab2 = `DELETE FROM Pontos WHERE ?`
        conexao.query(tab2, email, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            }
            else {
                console.log(resultados)
            }
        })
        const step2 = 'SET foreign_key_checks = 1'
        conexao.query(step2, () => {
            if(erro) {
                console.log(erro)
            }
            else {
                console.log(resultados)
            }
        })
    }

    atualiza(nome, email) {
        const sql = `UPDATE Users SET nome=? WHERE email=?`
        conexao.query(sql, [nome, email], (erro, resultados) => {
            if(erro) {
                console.log(erro)
            }
            else {
                console.log(resultados)
            }
        })
    }

    visualiza(email, res) {
        const sql = `SELECT * FROM Users WHERE email=?`
        conexao.query(sql, email, (erro, resultados) => {
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

module.exports = new Usuario