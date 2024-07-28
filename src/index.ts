#!/usr/bin/env node

import type Options from '@definitions/options'
import * as fs from 'fs'
import * as path from 'node:path'
import yargs from 'yargs'

const args = yargs(process.argv).argv as Options
const destination = args.destination ?? 'styles'

console.info('SCSS Utils')
console.info('Start – Copying assets to %s', destination)

fs.rmSync(destination, { recursive: true, force: true })
fs.mkdirSync(destination)
console.info('Done – Cleanup destination')

fs.cpSync(path.resolve(__dirname, 'styles'), destination, { recursive: true, force: true })
console.info('Done - Copying files')
