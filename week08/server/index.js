const ws = require('nodejs-websocket');
console.log('开始建立连接...')
const room = [];
const server = ws.createServer(function (conn) {
  conn.on('text', function (str) {
    console.log(room.length);
    if (room.indexOf(conn) === -1) {
      room.push(conn);
    } else {
      room.forEach((item) => {
        if (item !== conn) {
          item.sendText(str)
        }
      })
    }

  })
  conn.on('close', function () {
    const index = room.indexOf(conn);
    room.splice(index, 1);
    console.log('关闭');
  });
  conn.on('error', function (n) {
    const index = room.indexOf(conn);
    room.splice(index, 1);
    console.log('异常关闭')
  });
}).listen(8001);

console.log('WebSocket建立完毕');
