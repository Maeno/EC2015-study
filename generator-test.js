// Define generator function
function * generator () {
    yield 'hoge'
    yield 2

    console.log('What time is it now?')
    yield new Date()
}

// Create generator object
const g = generator()

console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())