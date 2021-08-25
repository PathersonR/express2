import pkg from 'mongodb';
export const dbQueryUsers = async () => {
    var users = []
    const {MongoClient} = pkg;
    const uri = "mongodb://127.0.0.1:27017"
    const client = new MongoClient( uri)
    try {
        await client.connect();
        const database = client.db('studentdb');             // use stduentdb
        const collection = database.collection('students');  // db.students...
        const query = {};
        await collection.find(query).toArray( function (err,result) {   // db.students.find
            if (err) throw err;
            console.log(result);
            let user = { 'id': result['_ID'], 'fname': result['FNAME'], 'lname': result['LNAME']}
            console.log(JSON.stringify(user))
            users = [...users, user]
        });
    }
    finally {
        await client.close();
    }
}
let users = dbQueryUsers().catch(console.dir);
console.log("users="+users)

