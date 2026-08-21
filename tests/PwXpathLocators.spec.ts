import{test,expect,Locator} from "@playwright/test"

test("Verify the xpaths",async ({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    //1.Absolute Xpath for identifing logo

    const Abslogo:Locator=page.locator("xpath=/html/body/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await expect(Abslogo).toBeVisible();

    //2.Relative Xpath of the logo

    const rellogo:Locator=page.locator("img[alt='Tricentis Demo Web Shop']");
    await expect(rellogo).toBeVisible();

    //3.Xpath with single attribute relative xpath
    await page.locator("//input[@id='small-searchterms']").fill("T-shirts");

   /*  //3.Xpath with multiple attributes
    page.locator("//input[@value='Search'][@type='submit']"); */

    //3.contains
    const products:Locator=page.locator("//h2//a[contains(@href,'computer')]");
    const productsCount:number=await products.count();
    console.log("No of computer related products is: ",productsCount); 
    expect(productsCount).toBeGreaterThan(0);

//    console.log(await products.textContent());  // it throws strict mode violation error

    console.log("First computer related product",await products.first().textContent());
    console.log("Last computer related product",await products.last().textContent());
    console.log("Nth computer related product",await products.nth(3).textContent());  //index will start from 0


    console.log(await products.allTextContents());
    let productTitles:string[]=await products.allTextContents();

    for(let pt of productTitles){
        console.log(pt);
    }
  
    //4.starts-with
   const buildingproducts:Locator=page.locator("//h2/a[starts-with(@href,'/build')]")
   const count:number=await buildingproducts.count();
   expect(count).toBeGreaterThan(0);

   //5.text()
    const reglink:Locator=page.locator("//a[text()='Register']");
    await expect(reglink).toBeVisible();

    //6.last()
   const lastItem:Locator=page.locator("//div[@class='column follow-us']//li[last()]");
   await expect(lastItem).toBeVisible();
   console.log("The last item displayed is :",await lastItem.textContent());

   //7.postition()
   const positionItem:Locator=page.locator("//div[@class='column follow-us']//li[position()=3]");   
   await expect(positionItem).toBeVisible();
   console.log("Position item is :",await positionItem.textContent());
})