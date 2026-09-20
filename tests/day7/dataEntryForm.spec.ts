import{test,expect,Locator} from "@playwright/test"


const pageUrl="https://sdetqa.vercel.app/autoplay";

test.describe("Validating DataEnty form validations",()=>{


test.beforeEach(async({page})=>{
    await page.goto(pageUrl);
    await expect(page.getByText("AutoPlay")).toBeVisible();

})

//1.Page Load Validation

test("Page Load Validation",async ({page})=>{
        //open the url and verify the page load
        await expect(page).toHaveURL("https://sdetqa.vercel.app/autoplay");
        await expect(page.getByText("AutoPlay")).toBeVisible();

})

//2.Input Fields Validation
test("Input fields validation",async({page})=>{

        const nameField=page.getByLabel("Full name");
        const emailField=page.getByLabel("Email");
        const phoneField=page.getByLabel("Phone");
        const addressField=page.getByLabel("Address");

        //FullName Field is visible and enabled
        await expect(nameField).toBeVisible();
        await expect(nameField).toBeEnabled();


        //check maxlength attribute for the full name field

        await expect(nameField).toHaveAttribute('maxlength','15');


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
test("Radio button validation",async ({page})=>{

    const maleRadio=page.getByLabel("Male",{exact:true});
    const femaleRadio=page.getByLabel("Female",{exact:true});

    await expect(maleRadio).toBeVisible();
    await expect(maleRadio).toBeVisible();

    await maleRadio.check();


    await expect(maleRadio).toBeChecked();
    await expect(femaleRadio).not.toBeChecked();
    await page.waitForTimeout(5000);
})

//4.Checkboxes days validation

test("4.Checkboxes validation",async ({page})=>{
    //select sunday checkbox
    // const sundayCheckbox=page.getByLabel("Sun");
    // await sundayCheckbox.check();    
    /* await sundayCheckbox.setChecked(true);      // it is use to select the checkbox
    await expect(sundayCheckbox).toBeChecked();

    await sundayCheckbox.setChecked(false); // it is used to uncheck the checkbox
    await expect(sundayCheckbox).not.toBeChecked(); */
   
     //select all Days
     const allDays:string[]=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    //with map

     const allcheckboxes= allDays.map((day)=>{

        return page.getByLabel(day);
    })
/*
    for(const checkbox of allcheckboxes){
        await checkbox.check();
       await expect(checkbox).toBeChecked();
    } */

       //without using the map

      /*  for(const day of allDays){
            const checkbox=page.getByLabel(day);
            await checkbox.check();
              await expect(checkbox).toBeChecked();
       }

    await page.waitForTimeout(5000);

    //uncheck fri,sat,sun and verify

    for(const day of ['Fri','Sat','Sun']){
        const checkbox=page.getByLabel(day);
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
    }
await page.waitForTimeout(5000);
       //toggle checkboxes  checked-->unchecked, unchecked-checked

       for(const day of allDays){
        const checkbox=page.getByLabel(day);
        if(await checkbox.isChecked()){
            checkbox.uncheck();
            await expect(checkbox).not.toBeChecked();
        }
        else{
            await checkbox.check();
            await expect(checkbox).toBeChecked();
            
        }
       }
       await page.waitForTimeout(5000); */


    //Select checkboxes using index (1,3,6 → Tue, Thu, Sun)

    const indexes=[1,3,6];

    for(const i of indexes){
        await allcheckboxes[i].check();
         await expect(allcheckboxes[i]).toBeChecked();
    }

     //Select by lable FRI
        const fricheckbox=page.getByLabel("Fri");
        await fricheckbox.check();
        await expect(fricheckbox).toBeChecked();
        await page.waitForTimeout(5000);

})

//  5. Submit Button Validation 
test("Submit Button validation",async({page})=>{
 const submitbtn=page.getByRole("button",{name:'Submit'}).first();
    //Visibility
    await expect(submitbtn).toBeVisible();
    //clicking
    await submitbtn.click();
    //Enabling 
    await expect(submitbtn).toBeEnabled();
    await page.waitForTimeout(5000);

})


//Leave all the fields empty and validate

test("Empty form submission",async({page})=>{
        const nameField=page.getByLabel("Full name");
        const emailField=page.getByLabel("Email");
        const phoneField=page.getByLabel("Phone");
        const addressField=page.getByLabel("Address");
        const submitbtn=page.getByRole("button",{name:'Submit'}).first();
        const errormessage=page.locator("#formErrors");

        await nameField.fill('');
        await emailField.fill('');
        await phoneField.fill('');
        await addressField.fill('');
        await submitbtn.click();

        await expect(errormessage).toBeVisible();
        await expect(errormessage).toContainText("Please fix the following:");

})

test("Invalid email format should throw an error",async({page})=>{

     const emailField=page.getByLabel("Email");
     const submitbtn=page.getByRole("button",{name:'Submit'}).first();
     const errormessage=page.locator("#formErrors");

     await emailField.fill("invalid-email-format");
     await submitbtn.click();

     await expect(errormessage).toBeVisible();
       await expect(errormessage).toContainText("Please enter a valid email address.");
})

//Enter more than 15 characters in the name field .Input should be restricted

test("Full Name input should restrict more than 15 characters",async({page})=>{
     const nameField=page.getByLabel("Full name");
     await nameField.fill("ThisNameisWayToLongtoAccept");
    //  await expect(nameField).toHaveValue("ThisNameisWayTo");
     await expect(nameField).toHaveValue(/.{15}/);


})

//Enter phone field should allow only numbers
test.only("Enter phone field should allow only numbers",async({page})=>{
    const phoneField=page.getByLabel("Phone");
     await phoneField.fill("123ABC456def789");
     await expect(phoneField).toHaveValue(/^[^A-Za-z]*$/);
   


})

})
