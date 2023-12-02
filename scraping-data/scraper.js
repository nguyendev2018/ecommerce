const scrapeCategory = (browser, url) => new Promise(async (resolve, reject) => {
    try {
        let page = await browser.newPage()
        console.log('>> Mở tab mới ...');
        await page.goto(url)
        console.log('>>Truy cập vào ' + url)
        await page.waitForSelector('#shopify-section-all-collections')
        console.log('>> Website đã load xong...');

        const dataCategory = await page.$$eval('#shopify-section-all-collections > .all-collections > .sdcollections-content > ul.sdcollections-list > li', els => {
            dataCategory = els.map(el => {
                return {
                    category: el.querySelector('.collection-name').innerText,
                    link: el.querySelector('a').href
                }
            })
            return dataCategory
        })
        await page.close()
        console.log('>> Tab đã đóng.');
        resolve(dataCategory)

    } catch (error) {
        console.log('lỗi ở scrape category: ' + error)
        reject(error)
    }
});
module.exports = {
    scrapeCategory
}