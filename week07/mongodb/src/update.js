const client = require('mongodb').MongoClient;

const DB_CONNECTION_URL = 'mongodb://localhost:27017/local';

const update = (db, cb) => {
  db = db.db('local');
  const collection = db.collection('user');
  const where = { age: { $gte: 80 } };
  const set = { $set: { age: 100 } };
  collection.updateMany(where, set, (err, result) => {
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

  update(db, (result) => {
    console.log(result);
    // 关闭数据库
    db.close();
  });
});