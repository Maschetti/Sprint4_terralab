class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.tabelaUsuario()
        this.tabelaPontos()
    }

    tabelaUsuario() {
        const sql = 'CREATE TABLE IF NOT EXISTS Users (email varchar(80) NOT NULL, nome varchar(50) NOT NULL, PRIMARY KEY(email))'

        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro)
            }   
            else {
                console.log('Tabela criada')
            }
        })
    }

    tabelaPontos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Pontos (id int NOT NULL AUTO_INCREMENT, descricao varchar(100) NOT NULL, latitude float NOT NULL, longitude float NOT NULL, email varchar(80) NOT NULL, PRIMARY KEY(id), FOREIGN KEY(email) REFERENCES Users(email))'

        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro)
            }   
            else {
                console.log('Tabela criada')
            }
        })
    }
}

module.exports = new Tabelas