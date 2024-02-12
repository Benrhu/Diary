import { type BasicResponse } from '../types'

/**
 * Basic JSON response for Controllers
 */

export interface INoteController {
  getInfo: (message?: string) => Promise<BasicResponse>
}
