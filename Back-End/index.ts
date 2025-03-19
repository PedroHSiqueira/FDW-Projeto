import express from 'express'
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Rota GET em execução')
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})