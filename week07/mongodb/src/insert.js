const client = require('mongodb').MongoClient;

const DB_CONNECTION_URL = 'mongodb://loaclhost:27017/local';

const data = new Array(20).fill(0).map((item, index) => ({
  _id: index + 1,
  name: `test${index + 1}`,
  age: Math.floor(Math.random() * 100)
}));

const insert = (db, cb) => {
  const collection = db.collection('user');
  collection.insert(data, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    cb(result);
  })
}

// 连接数据库
client.connect(DB_CONNECTION_URL, function(err, db) {

  if (err) {
    console.log(err);
    return;
  }

  insert(db, (result) => {
    console.log(result);
    // 关闭数据库
    db.close();
  });
});