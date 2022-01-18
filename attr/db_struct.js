const { MongoClient } = require('mongodb');

(async () => {
    const mdb = {
        host: '192.168.200.140',
        port: 27017,
        user: 'productManager',
        pass: 'UInJRX7m',
        name: 'synopsis',
        coll: 'reference_raw',
    };
    const db_url = `mongodb://${mdb.user}:${mdb.pass}@${mdb.host}:${mdb.port}/${mdb.name}`;
    const conn = await MongoClient.connect(db_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = conn.db(mdb.name);
    let fields = [];
    console.log("***** processing data *****");

    const listFields = (obj, parent) => {
        for (key in obj) {
            if (key !== '_id') {
                cKey = parent + '.' + key;
                if (fields.indexOf(cKey) < 0) {
                    fields.push(cKey);
                }
                if (typeof obj[key] === 'object') {
                    listFields(obj[key], cKey);
                }
            }
        }
    }

    const lim = 10000;
    const ttl = await db.collection(mdb.coll).count();
    const len = Math.ceil(ttl / lim);
    try {
        for (let i = 0; i < len; i++) {
            const result = await db.collection(mdb.coll).find().skip(i*lim).limit(lim).toArray();
            for (let j = 0; j < result.length; j++) {
                if (j && j % 100 === 0) console.log(`processing : ${i} - ${j}`);
                listFields(result[j], '');
            }
        }
        fields.sort();
        fields.forEach(val => console.log(val));
    } catch (error) {
        console.log(error);
    }
    process.exit(0);
})();
