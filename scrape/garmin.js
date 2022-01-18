const axios = require('axios');
const cheerio = require('cheerio');

const indexing = async context => {
    const { client, entry, base, interval, } = context;
    const baseURL = base ? base : "https://www.garmin.com";
    const source = "official";
    const lang = "en";
    const brand = "Garmin";
    const brandID = 352;
    const result = { source, lang, brand, brandID, collections: ['all'], items: { 'all': [] } };
    const urls = [
        "https://buy.garmin.com/categoryServices/en-US/US/categories/10002/products?currentPage=1&itemsPerPage=50",
        "https://buy.garmin.com/categoryServices/en-US/US/categories/10660/products?currentPage=1&itemsPerPage=50",
        "https://buy.garmin.com/categoryServices/en-US/US/categories/10662/products?currentPage=1&itemsPerPage=50",
        "https://buy.garmin.com/categoryServices/en-US/US/categories/10664/products?currentPage=1&itemsPerPage=50",
        "https://buy.garmin.com/categoryServices/en-US/US/categories/10668/products?currentPage=1&itemsPerPage=50",
        "https://buy.garmin.com/categoryServices/en-US/US/categories/10921/products?currentPage=1&itemsPerPage=50",
        "https://buy.garmin.com/categoryServices/en-US/US/categories/11040/products?currentPage=1&itemsPerPage=50",
    ];
    const uniq = [];
    try {
        for (const url of urls) {
            console.log(url);
            const {data} = await client.get(url);
            const p = data.products;
            for (let i = 1; i < p.length; i++) {
                const reference = p[i].id;
                const name = p[i].name;
                const url = p[i].url;
                const thumbnail = p[i].image && p[i].image.imageUrl && p[i].image.imageUrl.highResolution ? p[i].image.imageUrl.highResolution :
                    p[i].image && p[i].image.imageUrl && p[i].image.imageUrl.large ? p[i].image.imageUrl.large : null;
                const retail = p[i].price && p[i].price.listPrice && p[i].price.listPrice.formattedAmount ? p[i].price.listPrice.formattedAmount : null;
                if (uniq.indexOf(url) < 0) {
                    result.items['all'].push({
                        source, lang, brand, brandID, url, name, reference,
                        thumbnail, retail,
                    })
                    uniq.push(url);
                }
            }
        }
        for (const u of uniq) {
            console.log('     ', u);
            const {data} = await client.get(u);
            const productVariation = data.match(/"productVariation":"[a-zA-Z0-9ē® ]*"/g);
            const partNumber = data.match(/"partNumber":"\d{3}-\d{5}-\d{2}"/g);
            const urls = data.match(/"url":"[a-zA-Z0-9ē® \/-]*"/g);
            for (let i = 0; i < productVariation.length; i++) {
                const name = productVariation[i];
                const reference = partNumber[i];
                const url = baseURL + urls[i];
                result.items['all'].push({
                    source, lang, brand, brandID, url, name, reference,
                    thumbnail: null, retail:null,
                })
            }
            await new Promise(r => setTimeout(r, 2000));
        }
                // console.log(data);
                // const $ = cheerio.load(data);
                // const productId = data.match(/"productId": "\d{6}"/ig);
                // const productName = data.match(/"productName": "[a-zA-Z0-9ē® ]*"/ig);
                // const productVariation = data.match(/"productVariation": "/g);
                // console.log(productId);
                // console.log(productName);
                // const pre = $('meta[name="displayurl"]').attr('content');
                // $("meta").each((idx,el) => {
                //     const attr = $(el).attr("name");
                //     if (attr && attr.match(/sku/i)) {
                //         const reference = $(el).attr('content');
                //         const name = reference;
                //         const url = pre + '/pn/' + reference;
                //         result.items['all'].push({
                //             source, lang, brand, brandID, url, name, reference,
                //             thumbnail: null, retail:null,
                //         })
                //     }
                // })
                // $(".app__product__filters__group").each((idx, el) => {
                //     const v = $(el).find(".g__tooltip__summary").text();
                //     console.log(`v : ${v}`)
                //     if (!v) {
                //         // color/model, this should contain all variations
                //         // const v = $(el).find(".app__product__filters__label").text().replace(/\s+/g, "").trim();
                //         $(el).find(".app__product__filters__option").each((idx, el) => {
                //             const url = baseURL + $(el).find("a").attr("href");
                //             if (uniq.indexOf(url) < 0) {
                //                 uniq.push(url);
                //                 const reference = $(el).find("a").attr(".data-sku");
                //                 const thumbnail = $(el).find("img").attr("src")
                //                 result.items['all'].push({
                //                     source, lang, brand, brandID, url, name, reference,
                //                     thumbnail, retail:null,
                //                 })
                //             }
                //         })
                //     }
                // })
        return result;
    } catch (error) {
        console.log("Failed indexing for Garmin with error : ", error);
        return {};
    }
}

(async() => {
    const r = await indexing({
        client: axios,
    })
    r.items['all'].forEach(w => {
        console.log(w);
    })
    process.exit(0);
})()