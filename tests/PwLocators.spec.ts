/*
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.

page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.

page.getByAltText() to locate an element, usually image, by its text alternative.

page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

import{test,expect,Locator} from "@playwright/test";

//page.getByRole()
test("Playwright Locators getByRole",async ({page})=>{

    await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app");
    const projectlink:Locator=page.getByRole("link",{name:"Projects"});
    await expect(projectlink).toBeVisible();

    const signInbutton:Locator=page.getByRole("button",{name:"Sign In"});
    await expect(signInbutton).toBeVisible();

    await signInbutton.click();

})


//getByText 
test("Playwright Locators getByText",async ({page})=>{
     await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app");
    const welcomeText=page.getByText("Welcome, John! 👋 ",{exact:true});
    await expect(welcomeText).toBeVisible();
})

//page.getByLabel()
test("Playwright Locators getByLabel",async ({page})=>{
     await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app");
     const emailField= page.getByLabel("Email Address");
     await expect(emailField).toBeVisible();
     await emailField.fill("Aravind.juloori@gmail.com");
})

//page.getByPlaceholder()
test("Playwright Locators getByPlaceholder",async ({page})=>{
     await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app");
     const searchInput=page.getByPlaceholder("Search tests...");
     await expect(searchInput).toBeVisible();
     await searchInput.fill("Locators practise");
})


      // 5) getByAltText() - Locate an image by its alt attribute text
  //identifies images (and similar elements) based on the alt attribute.
  // Use this locator when your element supports alt text such as img and area elements.
test("Playwright Locators getByAltText",async ({page})=>{
     await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app");
    await expect(page.getByAltText("Playwright logo")).toBeVisible();
})


  // 6) getByTitle() - Locate an element using its title attribute
  // When to use: When your element has a meaningful title attribute.
  test("Playwright Locators getByTitle",async ({page})=>{
     await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app");
    
     const totalrunsbox=page.getByTitle("Total test runs");
    await expect(totalrunsbox).toBeVisible();
    await expect(totalrunsbox).toHaveText('4,821Total Runs');
    await expect(totalrunsbox).toContainText('4,821');
    
})

 // 7) getByTestId() - Locate elements using the data-testid attribute
  //Locate an element based on its data-testid attribute (other attributes can be configured)
  // When to use: When text or role-based locators are unstable or not suitable.

test.only("Playwright Locators getByTestId",async ({page})=>{
     await page.goto("http://127.0.0.1:5500/apps/pw-locators-demo-app.html");
    
     const proPlanButton= page.getByTestId('add-to-cart-pro');
    await expect(proPlanButton).toBeVisible();
    await proPlanButton.click();
    
    const searchButton=page.getByTestId('search-button');
    
})

//https://sdetqa.vercel.app/pw-locators-practice-app