import express, { type Request, type Response } from 'express'
import { NotesController } from '@/controllers/NotesController'
import { LogInfo } from '@/utils/logger'

// Router from express
const notesRouter = express.Router()

// http://localhost:8000/api/notes
notesRouter.route('/')
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  .get(async (req: Request, res: Response) => {
    const noteId: number = req?.query?.noteId
    LogInfo(`Query param: ${noteId}`)

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const controller: NotesController = new NotesController()
    const response = await controller.getMessage(noteId)
    return res.send(response)
  })
