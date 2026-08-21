//Css- cascading style sheets
/*
2 types of css selectors
1.Absolute css
2.relative CSS  


1.tag with id  ==>tag#id
2.tag with class ==tagname.classname
3.tag with any other attribute ==>tagname[attribute=value]
4.tag ,classname and any other attribute ==> tagname.classname[attribute=value]


tag is optional


page.locator(css/xpath)
*/

import{test,expect,Locator} from "@playwright/test"

test("verifying the Relative css locators",async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    //1.tag#id

    // await expect(page.locator("input#small-searchterms")).toBeVisible();
    // const searchbox:Locator=page.locator("#small-searchterms");
    // await searchbox.fill("T-shirts");

    // await page.waitForTimeout(5000);

    //2.tagname.classname
    // await page.locator("input.search-box-text").fill("T-shirts");
    // await page.locator(".search-box-text").fill("T-shirts");

    //3.tagName[attribute='value']

    // await page.locator("input[name='q']").fill("T-shirts");


    //4.tagName.className[attribute='value']

    // await page.locator("input.search-box-text[name='q']").fill("T-shirts");
    // await page.locator(".search-box-text[value='Search store']").fill("T-shirts");

    //https://testpages.eviltester.com/pages/basics/basic-web-page/
    //5.Relative css with the regular expression
    // await  page.locator("input[id^='small']").fill("T-shirts");  //starts-with
    //    await page.locator("input[id$='terms']").fill("T-shirts");   //ends-with
    await page.locator("input[id*='search']").fill("T-shirts");
    await page.waitForTimeout(5000);    
})