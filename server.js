//inisialisasi library
const express = require("express")
const app = express()

//import route siswa
const siswa = require("./router/siswa")
app.use("/siswa", siswa)

//membuat web server dengan port 8020
app.listen(8020, () => {
    console.log("server run on port 8020")
})
