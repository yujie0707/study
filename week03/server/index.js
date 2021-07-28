const express = require('express')
const app = express()
const port = 3000
const process = require('child_process');
const fs = require('fs');
const { resolve } = require('path');

app.get('/base/test', (req, res) => {
  fs.writeFileSync('../code_run/src/components/HelloWorld.vue', req.query.html);
  process.execSync('npm run build', {
    cwd: '../code_run',
    maxBuffer: 20000 * 1024
  });
  res.send(`http://localhost:8000?random=${Math.random()}`);

})

app.listen(port, () => {
  console.log(`Example app listening at http://127.0.0.1:${port}`)
});



