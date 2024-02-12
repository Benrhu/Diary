import express, { type Express, type Request, type Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port = (process.env.PORT != null) || 8000

/**
 * @params
 */
app.get('/', (req: Request, res: Response) => {
  res.send('Hello world')
})

app.get('/notes', (req: Request, res: Response) => {
  res.send('I have notes')
})

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
