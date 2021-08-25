const client = require('mongodb').MongoClient;

const DB_CONNECTION_URL = 'mongodb://loaclhost:27017';

const update = (db, cb) => {
  const collection = db.collection('user');
  const where = { age: { $gte: 10 } };
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