const fs = require('fs')

function readGenerator (g, name) {
    fs.readFile(name, 'utf-8', (err, data) => {
        g.next(data)
    })
}

const g = (function * () {
    const a = yield readGenerator(g, 'a.txt')
    console.log(a)
    const b = yield readGenerator(g, 'b.txt')
    console.log(b)
})()
g.next()