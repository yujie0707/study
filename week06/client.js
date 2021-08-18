const net = require("net");
const maxConnectCount = 100;

for (let i = 0; i < maxConnectCount; i++) {
  net
    .createConnection({
      port: 8989,
      host: "127.0.0.1",
    })
    .on("connect", (d) => {
      // console.log("connect");
    })
    .on("ready", (d) => {
      // console.log("ready");
    })
    .on("drain", (d) => {
      // console.log("drain");
    })
    .on("data", (d) => {
      console.log(d.toString());
    })
    .on("end", (d) => {
      // console.log("end");
    })
    .on("error", (err) => {
      console.log('error')
    })
    .on("timeout", (err) => {
      console.log("timeout");
    });
}
