import{test,expect} from "@playwright/test"

test("Verify  page url",async ({page})=>{

    await page.goto("https://www.snapfish.com");
     let url:string=page.url();
     console.log("url: ",url)
    await expect(page).toHaveURL(/snapfish/)

})