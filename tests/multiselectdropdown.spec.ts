import{test,expect,Locator} from "@playwright/test"

test("Verify multi select dropdown",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    
        const multiselect:Locator=page.locator("#colors");
     //1.Select option from the dropdown 4 ways
    // await multiselect.selectOption(['Red','Green','White']); //By visible text
    // await multiselect.selectOption(['yellow','white','green']); //By value
    //await multiselect.selectOption([{label:'Red'},{label:'Green'},{label:'White'}])  //by using label
     await multiselect.selectOption([{index:1},{index:4},{index:5}]);

     
    //2.check the no of options in the dropdown(count)
       const dropdownOptions:Locator=page.locator("#colors>option");
       await expect(dropdownOptions).toHaveCount(7);

    //3.check the option present in the dropdown
        const optionsText:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());
        console.log(optionsText);
        expect(optionsText).toContain("Green");



        //4.print all the options from the dropdown

        for(const option of optionsText){
            console.log(option);
        }
      
   await page.waitForTimeout(4000);
})