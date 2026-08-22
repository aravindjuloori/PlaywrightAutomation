import{test,expect,Locator} from "@playwright/test"

test("Verify test input Actions",async({page})=>{

     await page.goto("https://testautomationpractice.blogspot.com/");
     const textBox:Locator=page.locator("input#name");
  
    await expect(textBox).toBeVisible();  // to check the visiblity of the webElement
    await expect(textBox).toBeEnabled(); // to check the element is enabled or not

     const maxLength:any=await textBox.getAttribute("maxlength");
     console.log("MaxLength: ",maxLength);
     expect(maxLength).toBe('15');

     await textBox.fill("Joel Kennedy");
     const enteredText:string=await textBox.inputValue();
    console.log("input value of the first name:",enteredText);
     expect(enteredText).toBe("Joel Kennedy");

     await page.waitForTimeout(4000);

})

test.only("Verify radio buttons Actions",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const maleradio:Locator=page.locator("#male");
    await expect(maleradio).toBeVisible();
    await expect(maleradio).toBeEnabled();

    expect(await maleradio.isChecked()).toBe(false);
    await maleradio.check();
    expect(await maleradio.isChecked()).toBe(true);
     await expect(maleradio).toBeChecked();
    await page.waitForTimeout(3000);


})



test.only("Verify Checkbox Actions",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
         
    //req1:select specific checkbox sunday using getByLabel and assert
    const sundayCheckbox:Locator=page.getByLabel("Sunday");
    // await sundayCheckbox.check();
    // await expect(sundayCheckbox).toBeChecked();

       //2.Select all the checkboxes
    const days:string[]=['Sunday',"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const checkboxes:Locator[]=days.map(index=>page.getByLabel(index));
    /* expect(checkboxes.length).toBe(7);

    for(const checkbox of checkboxes){
        await checkbox.check();
        await expect(checkbox).toBeChecked();

    } */
    //  await page.waitForTimeout(5000);

         //uncheck the last 3 checkboxes

       /*  for(const checkbox of checkboxes.slice(-3)){
            await checkbox.uncheck();
            await expect(checkbox).not.toBeChecked();
        }
         await page.waitForTimeout(5000); */

         //unselect the checkboxes which are already selected and select the checkboxes which are not selected

         /* for(const checkbox of checkboxes){
            if(await checkbox.isChecked()){
                await checkbox.uncheck();
                await expect(checkbox).not.toBeChecked();
            }
            else{
                 await checkbox.check();
                await expect(checkbox).toBeChecked();
            }
         }
          await page.waitForTimeout(5000); */

          //randomly select 3 checkboxes

         const indexes:number[]=[1,3,6];
          for(const i of indexes){
            await checkboxes[i].check();
            await expect(checkboxes[i]).toBeChecked();
          }
            await page.waitForTimeout(5000);

       
           //Select the checkbox based on the label
             const weekname:string="Friday";

             for(const label of days){
                if(label.toLowerCase()===weekname.toLowerCase()){
                    const checkbox=page.getByLabel(label);
                    checkbox.check();
                    await expect(checkbox).toBeChecked();
                }
             }
              await page.waitForTimeout(5000);

})