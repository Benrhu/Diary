import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv'

dotenv.config();

const app: Express = express();
const port: string | number = process.env.PORT || 8000;

/**
 * @params
 */
app.get('/', (req: Request, res: Response) => {
    res.send('Hello world')
})


app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});

