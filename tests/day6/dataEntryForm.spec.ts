import{test,expect,Locator} from "@playwright/test"

const pageUrl="https://sdetqa.vercel.app/autoplay";

test.describe("Validating data entry form",()=>{

test.beforeEach(async({page})=>{
    await page.goto(pageUrl);
    await expect(page.getByText("AutoPlay")).toBeVisible();
})


//1.Page Load Validation

test("Page Load validation",async({page})=>{

    await expect(page).toHaveURL("https://sdetqa.vercel.app/autoplay");
    await expect(page.getByText("AutoPlay")).toBeVisible();

})
//2.Input Fields Validation

test("Input field validations",async({page})=>{

      const nameField=page.getByLabel("Full name");
      const emailField=page.getByLabel("Email");
      const phoneField=page.getByLabel("Phone");
      const addressField=page.getByLabel("Address");
    
    //check maxlength attribute for the full name field
      await expect(nameField).toHaveAttribute("maxlength","15");

    //Enter and verify the fullname value
     await nameField.fill("John Kennedy");
     const enteredText:string=await nameField.inputValue();
     console.log("input value of the first name:",enteredText);
     await expect(nameField).toHaveValue("John Kennedy");
	
    //Locate email field is visible and enter the value

     await expect(emailField).toBeVisible();
     await emailField.fill("tester@example.com");
     await expect(emailField).toHaveValue("tester@example.com");

    //Locate Phone field is visible and accept a value
     await expect(phoneField).toBeVisible();
     await phoneField.fill("+91 1233455675");
     await expect(phoneField).toHaveValue("+91 1233455675");

      //Locate address filed and accept multi line text
    await expect(addressField).toBeVisible();
    await addressField.fill("123 xyz Lane \n delhi india");
    await expect(addressField).toHaveValue("123 xyz Lane \n delhi india");
        
     await page.waitForTimeout(5000);
})

//3.Gender Radio button validation

test("Radio button validation",async({page})=>{

    const maleRadio=page.getByLabel("Male",{exact:true});
    const femaleRadio=page.getByLabel("Female",{exact:true});

    await expect(maleRadio).toBeVisible();
    await expect(femaleRadio).toBeVisible();

    await maleRadio.check();  // this is check the male radio button

    await expect(maleRadio).toBeChecked();
    await expect(femaleRadio).not.toBeChecked();

    await page.waitForTimeout(5000);

})



})