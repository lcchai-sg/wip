const { MongoClient } = require('mongodb');

(async () => {
    try {
        const ddb = {
            host: "192.168.10.144",
            port: 27017,
            user: "synopsis",
            pass: "synopsis",
            name: "synopsis",
            coll: "reference_raw",
        }
        const ldb = {
            host: "127.0.0.1",
            port: 27017,
            user: "synopsis",
            pass: "synopsis",
            name: "synopsis",
            coll: "reference_raw",
        }
        const ddb_url = `mongodb://${ddb.user}:${ddb.pass}@${ddb.host}:${ddb.port}/${ddb.name}`;
        const d_conn = await MongoClient.connect(ddb_url, { useUnifiedTopology: true, useNewUrlParser: true, });
        const d_db = d_conn.db(ddb.name);
        const ldb_url = `mongodb://${ldb.user}:${ldb.pass}@${ldb.host}:${ldb.port}/${ldb.name}`;
        const l_conn = await MongoClient.connect(ldb_url, { useUnifiedTopology: true, useNewUrlParser: true, });
        const l_db = l_conn.db(ldb.name);

        const raw = await d_db.collection(ddb.coll).find({ source: "official", brandID: 250 }).toArray();
        const r = await l_db.collection(ldb.coll).insertMany(raw);
        console.log(r);
    } catch (e) {
        console.log(e);
    }
    process.exit(0);
})();
