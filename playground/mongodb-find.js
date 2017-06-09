//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to db server\n', err);
  }
  console.log('Connected to db server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5939e980a693a96da9133fab')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({
    name: 'Kyle Greenwell'
  }).toArray().then((docs) => {
    console.log(docs);
  }, (err) => {
    console.log('Unable to fetch users', err);
  });

  // db.close();
});