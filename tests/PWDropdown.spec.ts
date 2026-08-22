import{test,expect,Locator} from "@playwright/test"

test("Verify the select dropdown",async({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/")

   const selectdropdown:Locator=page.locator("#country");

   //1.Select option from the dropdown (4 ways)
      //await selectdropdown.selectOption("Australia");  //By visible text
      //await selectdropdown.selectOption({value:'uk'}); //By value
     // await selectdropdown.selectOption({label:'India'}); //By label
      await selectdropdown.selectOption({index:5});  //By index
      
      
      //2. check no of options in the dropdown(count)
       const options:Locator=page.locator("#country>option");	
       await expect(options).toHaveCount(10);

         //3.Check If a Specific Option Exists
        const optionsText:string[]= (await options.allTextContents()).map(text=>text.trim());
      //   console.log(optionsText);
        expect(optionsText).toContain("Japan");

       //to check all the options in the dropdown
      for(const text of optionsText){
         console.log(text);
      }

      await page.waitForTimeout(5000);



})