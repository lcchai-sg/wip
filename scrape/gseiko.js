const axios = require('axios');
const baseImageUrl = "https://storage.grand-seiko.com/production-b/uploads/";
const CATEGORY_MAP = {
    2248: "watch",
    2255: "Elegance Collection",
    2256: "Heritage Collection",
    2257: "Sport Collection",
    6108: "Masterpiece Collection",
    13123: "Evolution 9 Collection",
};
const LOCALE_MAP = { 'en': 14, };

const indexing = async (context) => {
    const { client, entry, base, interval, } = context;
    const baseURL = base ? base : "https://www.grand-seiko.com/us-en/collections/";
    const source = 'official';
    const lang = 'en';
    const brand = 'Grand Seiko';
    const brandID = 84;
    const result = {
        source, lang, brand, brandID,
        collections: [
            "Elegance Collection",
            "Heritage Collection",
            "Sport Collection",
            "Masterpiece Collection",
            "Evolution 9 Collection",
        ], items: {
            "Elegance Collection": [],
            "Heritage Collection": [],
            "Sport Collection": [],
            "Masterpiece Collection": [],
            "Evolution 9 Collection": [],
        }
    };

    try {
        let count; let page = 1; let tp;
        const uniq = []; let dup = false;
        do {
            const { data } = await client.get(
                entry, {
                    params: {
                        category_id: 2248,
                        locale_id: LOCALE_MAP[lang],
                        page: page++,
                        paginate: true,
                        sort: '-publish_date',
                        unit: 18
                    }
                }
            );

            // console.log('data : ', data);
            if (!tp) tp = data.paginationStatus.pages;

            data.results.map(product => {
                // console.log('product : ', product);
                console.log('category ids : ', product.category_ids);
                console.log('category : ', product.acf_values.product_catalog_sub_brand_detail);

                let catId = product.category_ids.filter(id => id !== 2248)[0];
                console.log('category id : ', catId);
                if (catId) {
                    const idx = {
                        source, lang, brand, brandID,
                        reference: product.title,
                        name: product.title,
                        url: baseURL + product.slug,
                        collection: CATEGORY_MAP[catId],
                        thumbnail: baseImageUrl + product.thumbnail.url_key,
                        retail: product.acf_values.product_price
                    };
                    console.log({ reference:idx.reference, url:idx.url, collection:idx.collection, thumbnail:idx.thumbnail });
                    // if (uniq.indexOf(idx.reference) < 0) {
                    //     uniq.push(idx.reference);
                    //     result.items[CATEGORY_MAP[catId]].push(idx);
                    // } else dup = true;
                } else {
                    console.log('product : ', product);
                }
                console.log();
            })
            await new Promise(r => setTimeout(r, interval));
        } while (!(page > tp));
    } catch(err) {
        console.log(err);
    }
    return result;
}

(async() => {
    const r = await indexing({
        client: axios,
        entry: "https://www.grand-seiko.com/__api/posts/list",
        base: "https://www.grand-seiko.com/us-en/collections/",
    })    
    r.collections.forEach(c => {
        r.items[c].forEach(w => {
            console.log(w);
        })
    })
    console.log('done.....');
    process.exit(0);
})()