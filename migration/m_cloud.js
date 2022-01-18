const { MongoClient } = require('mongodb');

(async() => {
    try {
        const pdb = {
            host: "192.168.200.140",
            port: 27017,
            user: "productManager",
            pass: "UInJRX7m",
            name: "synopsis",
        };
        const pdb_url = `mongodb://${pdb.user}:${pdb.pass}@${pdb.host}:${pdb.port}/${pdb.name}`;
        const p_conn = await MongoClient.connect(pdb_url, { useUnifiedTopology: true, useNewUrlParser: true, });
        const p_db = p_conn.db(pdb.name);

        const cdb_url = `mongodb+srv://f2fnoodle:Pa55w0rd@cluster0.wqk0e.mongodb.net/synopsis?retryWrites=true&w=majority`;
        const c_conn = await MongoClient.connect(cdb_url, { useUnifiedTopology: true, useNewUrlParser: true, });
        const l_db = c_conn.db('synopsis');

        const pc = await p_db.collection('reference_product').count();
        const lim = 1000;
        const pcl = Math.ceil(pc / lim);
        for (i = 0; i < pcl; i++) {
            const prod = await p_db.collection('reference_product').find().skip(i * lim).limit(lim).toArray();
            const r = await l_db.collection('reference_product').insertMany(prod);
            console.log(r);
            process.exit(0);
        }
        // for (i = 0; i < prod.length; i++) {
        //     let p = prod[i];
        //     delete p._id;
        //     p.recordedAt = new Date(Date.parse(p.recordedAt));
        //     p.lastCheckAt = new Date(Date.parse(p.lastCheckAt));
        //     const r = await l_db.collection('reference_product').insertOne(p);
        //     console.log(i, '      ', r.insertedId);
        // }
    } catch (err) {
        console.log(err);
    }
    process.exit(0);
})()