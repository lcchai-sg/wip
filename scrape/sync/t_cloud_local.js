const { MongoClient } = require('mongodb');

(async () => {
	try {
		const cdb = {
			host: "cluster0.jrvjy.mongodb.net",
			user: "root",
			pass: "sysadmin",
			name: "fourd",
			coll: "fourd",
		};
		const ldb = {
			host: "127.0.0.1",
			port: 27017,
			user: "fourd",
			pass: "fourd",
			name: "fourd",
			coll: "fourd1",
		};
		const ddb_url = `mongodb+srv://${cdb.user}:${cdb.pass}@${cdb.host}/${cdb.name}?retryWrites=true&w=majority`;
		const d_conn = await MongoClient.connect(ddb_url, { useUnifiedTopology: true, useNewUrlParser: true, });
		const d_db = d_conn.db(cdb.name);
		const ldb_url = `mongodb://${ldb.user}:${ldb.pass}@${ldb.host}:${ldb.port}/${ldb.name}`;
		const l_conn = await MongoClient.connect(ldb_url, { useUnifiedTopology: true, useNewUrlParser: true, });
		const l_db = l_conn.db(ldb.name);

		console.log('reading DB..........................')
		const r = await d_db.collection(cdb.coll).find().toArray();
		console.log(`number of records : ${r.length}`);
		if (r.length > 0) {
			console.log('writing db..........................')
			const re = await l_db.collection(ldb.coll).insertMany(r);
			console.log('result : ', re.result);
		}
	} catch (e) {
		console.log(e);
	}
	process.exit(0);
})();
