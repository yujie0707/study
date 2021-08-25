const client = require('mongodb').MongoClient;

const DB_CONNECTION_URL = 'mongodb://loaclhost:27017';

const find = (db, cb) => {
  const collection = db.collection('user');
  const where = { age: { $gte: 10 } };
  const set = { age: 100 };
  collection.find(where, set).toArray((err, result) => {
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

  find(db, (result) => {
    console.log(result);
    // 关闭数据库
    db.close();
  });
});