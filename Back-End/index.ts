import express from 'express'
import userRoutes from './routes/users'
import adminRoutes from './routes/admins'

const app = express()
const port = 3000

app.use(express.json())
app.use('/users', userRoutes)
app.use('/admins', adminRoutes)

app.get('/', (req, res) => {
  res.send('News API: Back-End')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})