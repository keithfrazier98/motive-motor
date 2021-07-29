const puppeteer = require("puppeteer");



let BASE_URL = "https://motive-motor.netlify.app/" //process.env.BASE_URL //|| "https://localhost:3000"   
// example test
describe("App.js", () => {
    let browser
    let page

console.log(`testing ${BASE_URL}`)

    beforeAll(async () => {
        browser = await puppeteer.launch()
        page = await browser.newPage()
    })

   /* it("contains navigation tab", async () => {
        await page.goto(BASE_URL)
        await page.waitForSelector("")
    }) */

    it("contains some text", async () => {
        await page.goto(BASE_URL)
        await page.screenshot({path:"contains-some-text.png"})
        await page.waitForSelector("#App-welcome-text")
        const text = await page.$eval("#App-welcome-text", (e) => e.textContent)
        expect(text).toContain("Edit src/App.js and save to reload.")
    })

    afterAll(()=> browser.close())
})