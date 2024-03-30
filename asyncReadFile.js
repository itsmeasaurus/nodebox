const {readFile, writeFile} = require('fs');

readFile('./blogs/firstPost.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log(err)
        return;
    }
    const firstPost = result

    readFile('./blogs/secondPost.txt', 'utf-8', (err, result)=>{
        if(err){
            console.log(err)
            return;
        }
        const secondPost = result

        writeFile(
            './blogs/result2.text',
            `Here is the result : ${firstPost} and ${secondPost}`,
            (err, result)=>{
                if(err){
                    console.log(err)
                    return;
                }

                console.log(result)
            })

    })

})