import express from 'express'
import {
   getAllPeminjaman,
   getPeminjamanById,
   addPeminjaman,
   pengembalianBarang,
   usageReport
} from '../controllers/peminjaman.controller.js'

import {authorize} from '../controllers/auth.controller.js'


const app = express()


app.get('/borrow',   getAllPeminjaman)
app.get('/:id', getPeminjamanById)
app.post('/borrow', addPeminjaman)
app.post('/return', pengembalianBarang)
app.post('/usage-report', usageReport)


export default app