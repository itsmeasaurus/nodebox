const {readFile, writeFileSync} = require('fs');

const firstPost = readFile('./blogs/firstPost.txt', 'utf-8', ()=>{
    console.log('firstpost is reading')
})

const secondPost = readFile('./blogs/secondPost.txt', 'utf-8', ()=>{
    console.log('secondpost is reading')
})

writeFileSync(
    './blogs/result.txt',
    `Here is the result : ${firstPost} and ${secondPost}`,
    {flag: 'a'}
)
console.log('still writing')
console.log("finished")