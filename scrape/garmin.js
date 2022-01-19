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
        // "https://buy.garmin.com/categoryServices/en-US/US/categories/10002/products?currentPage=1&itemsPerPage=50",
        // "https://buy.garmin.com/categoryServices/en-US/US/categories/20120/products?currentPage=1&itemsPerPage=50",
        // "https://buy.garmin.com/categoryServices/en-US/US/categories/21380/products?currentPage=1&itemsPerPage=50",
        // "https://buy.garmin.com/categoryServices/en-US/US/categories/21900/products?currentPage=1&itemsPerPage=50",
        // "https://buy.garmin.com/categoryServices/en-US/US/categories/10660/products?currentPage=1&itemsPerPage=50",
        // "https://buy.garmin.com/categoryServices/en-US/US/categories/10662/products?currentPage=1&itemsPerPage=50",
        // "https://buy.garmin.com/categoryServices/en-US/US/categories/10664/products?currentPage=1&itemsPerPage=50",
        // "https://buy.garmin.com/categoryServices/en-US/US/categories/10668/products?currentPage=1&itemsPerPage=50",
        // "https://buy.garmin.com/categoryServices/en-US/US/categories/10921/products?currentPage=1&itemsPerPage=50",
        // "https://buy.garmin.com/categoryServices/en-US/US/categories/11040/products?currentPage=1&itemsPerPage=50",
        "https://buy.garmin.com/categoryServices/en-US/US/categories/BRAND10202/products?currentPage=1&itemsPerPage=50",
        // "https://buy.garmin.com/categoryServices/en-US/US/categories/BRAND10203/products?currentPage=1&itemsPerPage=50",
        // "https://buy.garmin.com/categoryServices/en-US/US/categories/BRAND10640/products?currentPage=1&itemsPerPage=50",
        // "https://buy.garmin.com/categoryServices/en-US/US/categories/BRAND11440/products?currentPage=1&itemsPerPage=50",
        // "https://buy.garmin.com/categoryServices/en-US/US/categories/BRAND15203/products?currentPage=1&itemsPerPage=50",
        // "https://buy.garmin.com/categoryServices/en-US/US/categories/BRAND15900/products?currentPage=1&itemsPerPage=50",
        // "https://buy.garmin.com/categoryServices/en-US/US/categories/BRAND17680/products?currentPage=1&itemsPerPage=50",
        // "https://buy.garmin.com/categoryServices/en-US/US/categories/BRAND18900/products?currentPage=1&itemsPerPage=50",
        // "https://buy.garmin.com/categoryServices/en-US/US/categories/BRAND18901/products?currentPage=1&itemsPerPage=50",
        // "https://buy.garmin.com/categoryServices/en-US/US/categories/BRAND473/products?currentPage=1&itemsPerPage=50",
        // "https://buy.garmin.com/categoryServices/en-US/US/categories/BRAND480/products?currentPage=1&itemsPerPage=50",
        // "https://buy.garmin.com/categoryServices/en-US/US/categories/BRAND481/products?currentPage=1&itemsPerPage=50",
        // "https://buy.garmin.com/categoryServices/en-US/US/categories/BRAND483/products?currentPage=1&itemsPerPage=50",
        // "https://buy.garmin.com/categoryServices/en-US/US/categories/BRAND562/products?currentPage=1&itemsPerPage=50",
    ];
    try {
        const uniq = [];
        for (const url of urls) {
            // logger.debug(url);
            const { data } = await client.get(url);
            const p = data.products;
            for (let i = 0; i < p.length; i++) {
                if (!p[i].group) {
                    const url = p[i].url.replace("buy", "www").replace("/US/", "/");
                    if (uniq.indexOf(url) < 0) {
                        const reference = p[i].id;
                        const name = p[i].name;
                        const thumbnail = p[i].image && p[i].image.imageUrl && p[i].image.imageUrl.highResolution ? p[i].image.imageUrl.highResolution :
                            p[i].image && p[i].image.imageUrl && p[i].image.imageUrl.large ? p[i].image.imageUrl.large : null;
                        const retail = p[i].price && p[i].price.listPrice && p[i].price.listPrice.formattedAmount ? p[i].price.listPrice.formattedAmount : null;
                        result.items['all'].push({
                            source, lang, brand, brandID, url, name, reference,
                            thumbnail, retail,
                        })
                        uniq.push(url);
                    }
                }
            }
        }
        let cnt = 0; const uniq1 = [];
        for (const u of uniq) {
            console.log('     ', u);
            const { data } = await client.get(u);
            const $ = cheerio.load(data);
            const d = $("#garmin-app-bootstrap").find("script").contents().toString();
            let dd = d.replace("var GarminAppBootstrap = ", "").replace("//<![CDATA[", "").replace("//]]>", "").trim();
            dd = dd.slice(0, dd.length - 1);
            const j = JSON.parse(dd);
            Object.keys(j.skus).forEach(p => {
                const d = j.skus[p];
                const name = d.seo && d.seo.title ? d.seo.title : "" + d.productVariation ? " | " + d.productVariation : "";
                const reference = d.partNumber ? d.partNumber : null;
                const url = d.url ? baseURL + d.url.replace("/US/", "/") : null;
                const thumbnail = d.seo && d.seo.ogImage ? d.seo.ogImage : null;
                const ccode = d.price && d.price.price && d.price.price.currencyCode ? d.price.price.currencyCode : "";
                const csym = d.price && d.price.price && d.price.price.currencySymbol ? d.price.price.currencySymbol : "";
                const price = d.price && d.price.price && d.price.price.price ? d.price.price.price : "";
                const retail = ccode + csym + price;
                if (reference && url) {
                    result.items['all'].push({
                        source, lang, brand, brandID, url, name, reference, thumbnail, retail
                    });
                }
                cnt++;
            })
            await new Promise(r => setTimeout(r, interval));
        }
        console.log(`total records : ${cnt}`);
        return result;
    } catch (error) {
        console.log("Failed indexing for Garmin with error : ", error);
        return {};
    }
}

const extraction = async context => {
    const { client, entry, base, ...rest } = context;
    const baseURL = base ? base : "https://www.garmin.com";
    const result = { ...rest, url: entry, spec: [], variations: [], }
    result.source = "official";
    result.lang = "en";
    result.brand = "Garmin";
    result.brandID = 352;
    try {
        const res = await client.get(entry);
        const cUrl = res.request.res.responseUrl;
        if (cUrl != entry) {
            result.code = 404;
            return result;
        }
        const { data } = res;
        let $ = cheerio.load(data);
        result.name = $('meta[property="og:title"]').attr('content');
        result.description = $('meta[property="og:description"]').attr('content');
        result.thumbnail = $('meta[property="og:image"]').attr('content');
        result.retail = $('meta[name="price_currency"]').attr('content') + ' ' + $('meta[name="product_price"]').attr('content');
        const d = $("#garmin-app-bootstrap").find("script").contents().toString();
        let dd = d.replace("var GarminAppBootstrap = ", "").replace("//<![CDATA[", "").replace("//]]>", "").trim();
        dd = dd.slice(0, dd.length - 1);
        const j = JSON.parse(dd);
        result.reference = j.sku;
        const jj = j.skus[j.sku];
        $ = cheerio.load(jj.tabs.overviewTab.content);
        let key = $("pc-overview-intro").attr("title");
        let value = $("pc-overview-intro").attr("description");
        if (value) result.spec.push({ key, value });
        $("pc-feature-card").each((idx, el) => {
            const key = $(el).attr('title') || "feature";
            const value = $(el).attr('description');
            if (value) result.spec.push({ key, value });
        })
        $ = cheerio.load(jj.tabs.specsTab.content);
        $("tr").each((idx, el) => {
            const key = $(el).find("th").text();
            const value = $(el).find("td").text().replace(/\s+/g, " ").trim();
            if (key && value) result.spec.push({ key, value });
        })
    } catch (error) {
        console.error('entry : ', entry);
        console.error('Failed extraction for Garmin with error : ', error);
        if (error.response) result.code = error.response.status;
        else result.code = 'UNKNOWN ERROR';
    }
    return result;
}

(async () => {
    const r = await indexing({
        client: axios,
    })
    for (let i = 0; i < r.items['all'].length; i++) {
        const ex = await extraction({
            client: axios,
            entry: r.items['all'][i].url,
        })
        console.log(ex);
        console.log();
        await new Promise(r => setTimeout(r, 2000));
    }
    process.exit(0);
})()