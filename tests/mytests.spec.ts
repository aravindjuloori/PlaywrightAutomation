import{test,expect} from "@playwright/test"

test("Verify  page title",async ({page})=>{

  await page.goto("https://www.snapfish.com");
  let pagetitle:String=await page.title();

//   console.log("Title of the webpage is :" ,pagetitle);
  await expect(page).toHaveTitle("Snapfish | Personalized Gifts, Cards, Home Decor, Photo Books & More");
})