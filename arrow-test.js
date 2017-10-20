const arrow1 = () => {
    console.log('arrow1')
}

const arrow2 = (name) => {
    console.log(name + ': arrow2')
}

(() => {
    console.log('bar')
})()

arrow1()
arrow2('hoge')

const str = 'Yes, we can!'
console.log(str.replace(/[a-z]+/g , (m) => {
  return m.toUpperCase()
}))

const array = [10, 1, 3, 2, 8, 8, 88]
console.log(array.sort((a, b) => {
  return a - b
}))