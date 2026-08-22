import{test,expect,Locator} from "@playwright/test"

test("Product sort and print lowest/highest price with names",async({page})=>{

    // Navigate to the URL
    await page.goto("https://www.bstackdemo.com/");
      // Locate the "Order by" dropdown using CSS selector and select "Lowest to highest"
    const orderByDropdown:Locator=page.locator("div.sort>select");
    await expect(orderByDropdown).toBeVisible();
    await expect(orderByDropdown).toBeEnabled();

    await orderByDropdown.selectOption({label:'Lowest to highest'});
    
    await page.waitForTimeout(4000);

       // Wait for sorting to reflect 
       // Get all product price and name elements using CSS

        const priceValue:Locator=page.locator("div.val");
        const productName:Locator=page.locator("p.shelf-item__title");

      const prices:string[]=await priceValue.allTextContents();
      const products=await productName.allTextContents();

      expect(prices.length).toBe(products.length);
      console.log('Printing Product Names along with their Prices.......');
      for(let i=0;i<products.length;i++){

        console.log(`${products[i]}:${prices[i]}}`);
      }

      console.log(`Lowest priced product:${products[0]}:${prices[0]}`);
      console.log(`Highest priced products:${products[products.length-1]}:${prices[prices.length-1]}`);


})