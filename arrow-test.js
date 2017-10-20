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