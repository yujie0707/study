// parent.js
const childProcess = require("child_process");
const net = require("net");

// 获取cpu的数量
const cpuNum = require("os").cpus().length;

let workers = [];
let cur = 0;

for (let i = 0; i < cpuNum; ++i) {
  workers.push(childProcess.fork("./worker.js"));
  console.log("worker process-" + workers[i].pid);

  workers[i].on(
    "exit",
    ((i) => {
      return () => {
        console.log("!!!!!!!! worker-" + workers[i].pid + " exited");
        workers[i] = childProcess.fork("./worker.js");
        console.log(">>>>> Create worker-" + workers[i].pid);
      };
    })(i)
  );
}

// 创建TCP服务器
const tcpServer = net.createServer();

/*
 服务器收到请求后分发给工作进程去处理
*/
tcpServer
  .on("connection", (socket) => {
    //用法二：发送socket给worker，socket发送过去了，连接转给了worker
    console.log("New Connection>>");
    workers[cur].send("socket", socket);
    cur = Number.parseInt((cur + 1) % cpuNum);
  })
  .on("error", (err) => {
    throw err;
  });

tcpServer.listen(8989, () => {
  console.log("Tcp Server: 127.0.0.8989");
});
