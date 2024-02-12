import { type BasicResponse } from './types'
import { type INoteController } from './interfaces'
import { LogSuccess } from '@/utils/logger'

export class NotesController implements INoteController {
  public async getInfo (message?: string): Promise<BasicResponse> {
    LogSuccess('[api/notes] Get Request')

    return {
      message: `I have ${(message != null) || 'notes'}`
    }
  }
}
