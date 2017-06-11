const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to db server\n', err);
  }
  console.log('Connected to db server');

  // db.collection('Todos').findOneAndUpdate(
  //   {_id: new ObjectID('593af3ab1155e65b22584770')},
  //   {$set: {completed: true}},
  //   {returnOriginal: false}
  // ).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate(
    {_id: new ObjectID('593c8814633390e99a3c6514')},
    {$set: {name: "Kyle"}, $inc: {age: 1}},
    {returnOriginal: false}
  ).then((result) => {
    console.log(result);
  });

  // db.close();
});
