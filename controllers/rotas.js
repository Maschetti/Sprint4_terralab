const Pontos = require('../models/pontos')
const Usuario = require('../models/usuario')

module.exports = app => {
    app.get('/VisualizarUsuario/', (req,res) => {
        const query = req.query
        Usuario.visualiza(query.email, res)
    })

    app.post('/AdicionarUsuario/', (req, res) => {
        const query = req.query
        Usuario.adiciona(query)

        res.send(`Adicionando o usuario ${query.email}`)
    })

    app.put('/AtualizarUsuario/', (req, res) => {
        const query = req.query
        Usuario.atualiza(query.nome, query.email)

        res.send(`Atualizando o usuario ${query.email}`)
    })

    app.delete('/RemoverUsuario/', (req, res) => {
        const query = req.query
        Usuario.deleta(query)

        res.send(`Deletando o usuario ${query.email}`)
    })

    app.get('/VisualizarPonto/', (req,res) => {
        const query = req.query
        Pontos.visualiza(query, res)
    })

    app.post('/AdicionarPonto/', (req, res) => {
        const query = req.query
        Pontos.adiciona(query)
        
        res.send(`Adicionando o ponto pelo usuario ${query.email}`)
    })

    app.put('/AtualizarPonto/', (req, res) => {
        const query = req.query
        Pontos.atualiza(query)

        res.send(`Atualizando ponto ${query.id}`)
    })

    app.delete('/RemoverPonto/', (req, res) => {
        const query = req.query
        Pontos.deleta(query)

        res.send(`Deletando o ponto ${query.id}`)
    })
}