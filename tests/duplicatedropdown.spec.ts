import{test,expect,Locator} from "@playwright/test"

test("Verify duplicate elements in dropdown",async({page})=>{

    
    await page.goto("https://testautomationpractice.blogspot.com/")
    const dropdownoptions:Locator=page.locator("#colors>option");  //having duplicates

          const optionsText:string[]=(await dropdownoptions.allTextContents()).map(text=>text.trim());
        //   console.log(optionsText);

        const myset=new Set<string>();  //duplicates not allowed
        const duplicates=[]; //duplicates allowed
    for(const text of optionsText){
      if(myset.has(text)){
        duplicates.push(text);
      }
      else{

        myset.add(text);
      }
}

        console.log("Duplicate items:", duplicates);
        console.log("Myset:",myset);

    await page.waitForTimeout(3000);
      
})