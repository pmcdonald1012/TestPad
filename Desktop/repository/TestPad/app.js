var fs = require('fs')


fs.writeFile('app.txt','new words', (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('it worked!')
  }
})

// fs.readFile('app.txt','utf8',function(error, data){
//     if(error){
//         console.log(error)
//     } else {
//         console.log(data)
//     }
// })