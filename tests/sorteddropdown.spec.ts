import{test,expect,Locator} from "@playwright/test"

test("Verify dropdown is sorted",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

        // const dropdownoptions:Locator=page.locator("#animals>option");
       // console.log(await dropdownoptions.allTextContents());
        const dropdownoptions:Locator=page.locator("#colors>option");
           const optionsText:string[]=(await dropdownoptions.allTextContents()).map(text=>text.trim());
        //    console.log(optionsText);

        const originalList:string[]=[...optionsText];
        const sortedList:string[]=[...optionsText].sort();

           console.log(originalList);
           console.log(sortedList);
           expect(originalList).not.toEqual(sortedList);
})