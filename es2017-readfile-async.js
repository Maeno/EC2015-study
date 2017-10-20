const fs = require('fs')

const readFile = (name) => {
    return new Promise((resolve, reject) => {
        fs.readFile(name, 'utf-8', (err, data) => {
            resolve(data)
        })
    })
}

async function readAll() {
    const a = await readFile('a.txt')
    console.log(a)
    const b = await readFile('b.txt')
    console.log(b)
}

readAll()