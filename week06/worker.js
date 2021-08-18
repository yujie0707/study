//worker

// 接收主进程发来的消息
process.on("message", (msg, socket) => {
  if (msg === "socket" && socket) {
    setTimeout(() => {
      socket.end("Request handled by worker-" + process.pid);
      // process.exit();
    }, 100);
  }
});
