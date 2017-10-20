const fs = require('fs')

// When you want to use promise function,
// you have to prepare function that returns promise object.

function readFilePr (name) {
    return new Promise((resolve) => {
        fs.readFile(name, 'utf-8', (err, data) => {
            resolve(data)
        })
    })
}

// When async process is done, 
// then function will be invoked.

readFilePr('a.txt').then(
    (text) => {
        console.log('Read a.txt file.')
        return readFilePr('b.txt')
    }
).then((text) => {
    console.log('Read b.txt file.')
})