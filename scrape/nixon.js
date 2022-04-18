const axios = require('axios');
const cheerio = require('cheerio');

const indexing = async (context) => {
    const { client, entry, base, interval } = context;
    const source = 'official';
    const lang = 'en';
    const brand = 'Nixon';
    const brandID = 472;
    const result = { source, lang, brand, brandID, collections: ['all'], items: { 'all': [] } };
    const uniq = [];
    try {
        const { data } = await client.get(entry);
        const $ = cheerio.load(data);
        const sitemap = $("loc").first().text();
        console.log(`sitemap : ${sitemap}`);
        const { data: sm } = await client.get(sitemap);
        const $$ = cheerio.load(sm);
        $$("url").each((idx, el) => {
            const url = $$(el).find("loc").text();
            if (url !== "https://www.nixon.com/")
                if (uniq.indexOf(url) < 0) uniq.push(url);
        })
        let cnt = 0;
        for (const u of uniq) {
            try {
                const link = u + "?view=json";
                const { data } = await client.get(link);
                if (data.type && data.type.match(/watch/i)) {
                    const name = data.title;
                    const retail = data.price_formatted;
                    let thumbnail = null;
                    if (data.featured_image && data.featured_image.src) {
                        thumbnail = data.featured_image.src.split("?")[0];
                        thumbnail = thumbnail.match(/https/i) ? thumbnail : "https:" + thumbnail;
                    }
                    const reference = data.variants ? data.variants.length > 0 ? data.variants[0].sku : null : null;
                    console.log({ url: u, name, reference, thumbnail, retail });
                    cnt++;
                }
            } catch (error) {
                console.log('Error fetching JSON data : ', error);
                console.log(u);
            }
        }
        console.log();
        console.log(`Nixon indexing completed..... count : ${cnt}`);
        return result;
    } catch (error) {
        console.log('Failed indexing for Nixon with error : ' + error);
        return {};
    }
};

(async () => {
    const r = await indexing({
        entry: "https://www.nixon.com/sitemap.xml",
        client: axios,
        base: "https://www.nixon.com",
    })
    console.log(r);
    process.exit(0);
})();