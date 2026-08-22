import{test,expect,Locator} from "@playwright/test"
//using xpath
/* test("Handle Dynamic Elements using xpath",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    for(let i=0;i<=5;i++){
      //using xpath
      let button:Locator=page.locator("//button[text()='START' or text()='STOP']");

      //click the button
      await button.click();
      //wait for 2 seconds
      await page.waitForTimeout(2000);
    }
}) */
//using css locator
/* test("using the css ",async({page})=>{
      await page.goto("https://testautomationpractice.blogspot.com/");
    for(let i=0;i<=5;i++){
        //locate the button using css locator 
      let button:Locator=page.locator('button[name="start"],button[name="stop"]');

      //click the button
      await button.click();
      //wait for 2 seconds
      await page.waitForTimeout(2000);
    }
}) */

    test("using the getByrole ",async({page})=>{
      await page.goto("https://testautomationpractice.blogspot.com/");
    for(let i=0;i<=5;i++){
        //locate the button using GetByRole locator 
      let button:Locator=page.getByRole('button',{name:/START|STOP/});

      //click the button
      await button.click();
      //wait for 2 seconds
      await page.waitForTimeout(2000);
    }
})