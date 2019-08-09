import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as logger from 'morgan'
import * as passport from 'passport'
import * as cors from 'cors'
import * as compression from 'compression'
import * as fs from 'fs'

import httpRouter from './router'

const app: express.Application = express()

app.use(bodyParser.urlencoded({ extended.false }))
app.use(bodyParser.json())

app.use(compression())

app.use(logger('common', {
  stream: fs.createWriteStream('./access.log', {flags: 'a'})
}))

app.use(logger('dev'))

const corsMiddleware = cors({ origin: '*', preflightContinue: true })
app.use(corsMiddleware)
app.options('*', corsMiddleware)

httpRouter(app)

const myApp: express.Application = app

export default myApp
