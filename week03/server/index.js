const express = require('express')
const app = express()
const port = 3000
const process = require('child_process');

app.get('/base/test', (req, res) => {
  console.log(req.query.html);
  writeFile(req.query.html).then(() => {
    process.execSync('cd ../code_run && npm run build');
    // process.execSync('');
    res.send('http://localhost:8000');
  }).catch(() => {
    res.send('写入文件错误');
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://127.0.0.1:${port}`)
});

const writeFile = (text) => new Promise((resolve, reject) => {
  const fs = require('fs');
  fs.writeFile('../code_run/src/components/HelloWorld.vue', text, 'utf8', (err) => {
    if (err) {
      reject(err);
    } else {
      resolve();
    }
  }) 
})



