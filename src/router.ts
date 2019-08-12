import { Application, Router, Request, Response, NextFunction } from 'express'

const router = (app: Application) => {
  const apiRouter: Router = Router()

  apiRouter.get('/', (req: Request, res: Response) => {
    res.status(200).json({message: "Success!"})
  })

  app.use('/api/v1', apiRouter)
}

export default router
