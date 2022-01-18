const { MongoClient } = require('mongodb');

(async () => {
    try {
        const cdb = {
            user: "f2fnoodle",
            pass: "Pa55w0rd",
            name: "synopsis",
            coll: "reference_urls",
        }
        const ldb = {
            host: "127.0.0.1",
            port: 27017,
            user: "synopsis",
            pass: "synopsis",
            name: "synopsis",
            coll: "reference_urls",
        }
        const ddb_url = `mongodb+srv://${cdb.user}:${cdb.pass}@cluster0.wqk0e.mongodb.net/${cdb.name}?retryWrites=true&w=majority`;
        const d_conn = await MongoClient.connect(ddb_url, { useUnifiedTopology: true, useNewUrlParser: true, });
        const d_db = d_conn.db(cdb.name);
        const ldb_url = `mongodb://${ldb.user}:${ldb.pass}@${ldb.host}:${ldb.port}/${ldb.name}`;
        const l_conn = await MongoClient.connect(ldb_url, { useUnifiedTopology: true, useNewUrlParser: true, });
        const l_db = l_conn.db(ldb.name);

        const limit = 100000;
        for (let i = 0; i < 5; i++) {
            console.log('reading DB..........................')
            const r = await d_db.collection(cdb.coll).find().skip(i * limit).limit(limit).toArray();
            console.log('number of records : ', r.length, i)
            if (r.length > 0) {
                console.log('writing db..........................')
                await l_db.collection(ldb.coll).insertMany(r);
            }
        }
    } catch (e) {
        console.log(e);
    }
    process.exit(0);
})();
