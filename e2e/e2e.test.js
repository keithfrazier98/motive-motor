import puppeteer from "puppeteer"

// example test
describe("App.js", () => {
    let browser
    let page

    beforeAll(async () => {
        browser = await puppeteer.launch()
        page = await puppeteer.newPage()
    })

    it("contains some text", async () => {
        await page.goto("https://motive-motor.netlify.app/")
        await page.waitForSelector(".App-welcome-text")
        const text = await page.$eval(".App-welcome-text", (e) => e.textContent)
        expect(text).toContain("Edit src/App.js and save to reload.")
    })

    afterAll(()=> browser.close())
})