// Break code, because, probably, need 'node modules' folder

const fs = require('fs');

// Callback hell
fs.readFile('./example1.txt', (error1, content1) => {
  fs.readFile('./example2.txt', (error2, content2) => {
    console.log(error1, String(content1));
    console.log(error2, String(content2));
  })
})


// Clean code with promises
const readFile = file => new Promise((resolve, reject) => {
  fs.readFile(file, (error, content) => {
    if(error) {
      reject(error)
    } else {
      resolve(content)
    }
  })
})


const promiseState = readFile('./example.txt')
  .then(content => console.log(null, String(content)))
  .catch(error => console.log(error))

setTimeout(() => console.log(promiseState), 2000)


// Async/await (best promise management)
const init = async () => {
  try {
    const content = await readFile('./example1.txt');
    return String(content);
  } catch(err) {
    console.log(err.message);
  }
}

init()
  .then(contents => console.log(contents))
  .catch(error => console.log(error))