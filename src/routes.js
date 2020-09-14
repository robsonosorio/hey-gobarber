const { Router } = require('express')
const { route } = require('./app')

const routes = new Router()

routes.get('/', (req, res) => {
    return res.json({ 'message': ' testando' })
})

module.exports = routes