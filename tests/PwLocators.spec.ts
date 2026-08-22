/*
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByText() to locate by text content.
page.getByRole() to locate by explicit and implicit accessibility attributes.

page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.

page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

import{test,expect,Locator} from "@playwright/test"


//page.getByAltText() to locate an element, usually image, by its text alternative.
test("Verify Playwright getByAltText",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/");
    const logo:Locator=page.getByAltText("Rahul Shetty Academy");
    await expect(logo).toBeVisible();
})

//page.getByText() to locate by text content.Its just like non-interactive elements like div,span,p,h2

test.only("Verify playwright getByText",async({page})=>{

   await page.goto("https://rahulshettyacademy.com/locatorspractice/");

   const remeberText:Locator=page.getByText("Remember my username");
   await expect(remeberText).toBeVisible();
    await expect(page.getByText("Remember my ")).toBeVisible();  //substring/partial text
     await expect(page.getByText(/remember\s+My\s+Username/i)).toBeVisible();  //Regular Expression 
})

//page.getByRole() to locate by explicit and implicit accessibility attributes.(interactive)

test("Verify by getByRole",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/locatorspractice/");
    await page.getByRole("link",{name:'Forgot your password?'}).click();
    await expect(page.getByRole("heading",{name:'Forgot password'})).toBeVisible();

    await page.waitForTimeout(3000);
})

//4.page.getByLable()-Locate by using the lable text

test("Verify by using getByLabel",async({page})=>{

    await page.goto("http://127.0.0.1:5500/tests/app.html");
    await page.getByLabel("Email Address:").fill("aravind.juloori@gmail.com");
     const emailTextBox:Locator=page.locator("#email");
     const enteredvalue:string=await emailTextBox.inputValue();
     expect(enteredvalue).toBe("aravind.juloori@gmail.com")


    await page.waitForTimeout(5000);
})

//5.page.getByPlaceHolder()

test("Verify by using the getByPlaceHolder",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByPlaceholder("Enter Name").fill("Aravind");

})

//6.page.getByTitle()
test("Verify by using getByTitle",async({page})=>{

   await page.goto("http://127.0.0.1:5500/tests/app.html") 
   const title:Locator=page.getByTitle("Home page link");
//    await title.click();
   await expect(title).toHaveText("Home");

   await expect(page.getByTitle("HyperText Markup Language")).toHaveText("HTML")
})

//6.page.getBydata-testId()
test("Verify by using getBydata-testId",async({page})=>{

        await page.goto("http://127.0.0.1:5500/tests/app.html") 
        const email:Locator=page.getByTestId("profile-email");
        await expect(email).toHaveText("john.doe@example.com");
        await expect(page.getByTestId("profile-name")).toHaveText("John Doe");
   
})