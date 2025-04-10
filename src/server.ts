import express, { urlencoded } from 'express'
import { router } from './routers/router'
import cors from 'cors'
import path from 'path'

const server = express()

server.use(express.json())
server.use(urlencoded({ extended: true }))
server.use(express.static(path.join(__dirname, '../public')))
server.use(cors())
server.use(cors({ exposedHeaders: 'Authorization' }))

server.use('/', router)

server.listen(4000, '0.0.0.0', () => {
    console.log('Servidor rodando na porta 4000');
});
