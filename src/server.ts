require('babel-polyfill')

if(process.env.NODE_ENV != 'production') {
  require('dotenv').config()
}

import * as http from 'http'
import app from './app'

import * as iconvLite from 'iconv-lite'

iconvLite.encodingExists('foo')
