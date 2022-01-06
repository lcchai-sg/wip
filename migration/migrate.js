const { MongoClient } = require('mongodb');

(async () => {
    try {
        const ddb = {
            host: "203.118.42.106",
            port: 27017,
            user: "synopsis",
            pass: "synopsis",
            name: "synopsis",
        };

        const ldb = {
            host: "127.0.0.1",
            port: 27017,
            user: "synopsis",
            pass: "synopsis",
            name: "synopsis1",
        }

        const db_exists = (db, col) => {
            let found = false;
            for (i = 0; i < col.length && !found; i++) {
                if (col[i].name === db) found = true;
            }
            return found;
        }
        const ddb_url = `mongodb://${ddb.user}:${ddb.pass}@${ddb.host}:${ddb.port}/${ddb.name}`;
        const d_conn = await MongoClient.connect(ddb_url, { useUnifiedTopology: true, useNewUrlParser: true, });
        const d_db = d_conn.db(ddb.name);
        const ldb_url = `mongodb://${ldb.user}:${ldb.pass}@${ldb.host}:${ldb.port}/${ldb.name}`;
        const l_conn = await MongoClient.connect(ldb_url, { useUnifiedTopology: true, useNewUrlParser: true, });
        const l_db = l_conn.db(ldb.name);
        let d_col = await d_db.listCollections().toArray(); d_col = d_col.sort((a, b) => a.name > b.name ? 1 : -1);
        let l_col = await l_db.listCollections().toArray(); l_col = l_col.sort((a, b) => a.name > b.name ? 1 : -1);

        const limit = 10000;
        for (const c of d_col) {
            const ci = await d_db.collection(c.name).indexes();
            if (db_exists(c.name, l_col)) {
                console.log(`drop local collection : ${c.name}`);
                await l_db.collection(c.name).drop();
            }
            console.log(`create local collection : ${c.name}`);
            await l_db.createCollection(c.name);
            console.log(`create local indexes.....`);
            for (const idx of ci) {
                if (idx.name !== '_id_') {
                    console.log(`index : ${idx.name}`);
                    await l_db.collection(c.name).createIndex(idx.key);
                }
            }
            const cr = await d_db.collection(c.name).count();
            const l = Math.ceil(cr / limit);
            for (i = 0; i < l; i++) {
                const d = await d_db.collection(c.name).find().skip(i * limit).limit(limit).toArray();
                console.log(`${i}     writing ${d.length} records to ${c.name}`);
                await l_db.collection(c.name).insertMany(d);
            }
            console.log(`${c.name}     migrated`);
            console.log();
            await new Promise(r => setTimeout(r, 5000));
        }
    } catch (e) {
        console.log(e)
    }
    console.log('done.....');
    process.exit(0);
})()