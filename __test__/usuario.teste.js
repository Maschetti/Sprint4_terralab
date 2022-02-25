const Usuario = require('../models/usuario')
const conexao = require('../infraestrutura/conexao')

user = {
    nome: 'Mateus',
    email: 'mateus@gmail.com'
}
describe('add', () => {
    test('add a new user', (user) => {
        Usuario.adiciona(user)
    })
    const sql = `SELECT * FROM Users WHERE email=?`
    const atendimento = conexao.query(sql, user.email, (erro, resultados) => {
        return resultados
    })
    expect(atendimento).toEqual(user)
})