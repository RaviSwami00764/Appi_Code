const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const fs = require('fs');


(async function imdbAutomation() {
  const movieName = 'Inception';
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://imdb.com');

    let searchField = await driver.wait(until.elementLocated(By.css('#suggestion-search')), 10000);
    await searchField.sendKeys(movieName);

    let searchButton = await driver.wait(until.elementLocated(By.css('#suggestion-search-button')), 10000);
    await searchButton.click();

    let firstResult = await driver.wait(until.elementLocated(By.css('#__next > main > div.ipc-page-content-container.ipc-page-content-container--full.sc-f9aead43-0.evyTrd > div.ipc-page-content-container.ipc-page-content-container--center > section > div > div.ipc-page-grid__item.ipc-page-grid__item--span-2 > section:nth-child(4) > div.sc-a9505ad5-2.ZcXyE > ul > li:nth-child(1) > div.ipc-metadata-list-summary-item__c > div > a')), 10000);
    let movieUrl = await firstResult.getAttribute('href');
    await driver.get(movieUrl);

    let ratingElement = await driver.wait(until.elementLocated(By.css('#__next > main > div > section.ipc-page-background.ipc-page-background--base.sc-c41b9732-0.NeSef > section > div:nth-child(5) > section > section > div.sc-491663c0-4.yjUiO > div.sc-491663c0-6.lnlBxO > div.sc-491663c0-11.cvvyMK > div.sc-3a4309f8-0.bjXIAP.sc-b7c53eda-5.cxlubq > div > div:nth-child(1) > a > span > div')), 10000);
    let movieRating = await ratingElement.getText();

    console.log('Movie Rating:', movieRating);

    let screenshot = await driver.takeScreenshot();
    fs.writeFileSync('movieImage.jpg', screenshot, 'base64');

    console.log('Screenshot saved as movieImage.jpg');
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    await driver.quit();
  }
})();



// const {Builder, By, until} = require("selenium-webdriver");


// (async function priceComparison(){
//     let driver = await new Builder().forBrowser("chrome").build();
//     let isSuccess = true;
//     let errorMessage = "";
//     let goWith = 1;
//     let flipkartPiceList = [];
//     let flipkartLabelList = [];
//     let productName = "iphone 13";
//     try{
//         await driver.get("https://www.flipkart.com/");
        
//         let flipkartSelectorMap = {
//             searchField : "#container > div > div.q8WwEU > div > div > div > div > div:nth-child(1) > div > div.css-175oi2r.r-13awgt0.r-1iqfa7g.r-60vfwk > div > div._2nl6Ch > div._2NhoPJ > header > div._3ZqtNW > div._3NorZ0._3jeYYh > form > div > div > input",
//             searchButton: "#container > div > div.q8WwEU > div > div > div > div > div:nth-child(1) > div > div.css-175oi2r.r-13awgt0.r-1iqfa7g.r-60vfwk > div > div._2nl6Ch > div._2NhoPJ > header > div._3ZqtNW > div._3NorZ0._3jeYYh > form > div > button",
//             productNameCheck1: (x)=>{
//                 return `#container > div > div.nt6sNV.JxFEK3._48O0EI > div.DOjaWF.YJG4Cf > div:nth-child(2) > div:nth-child(${x}) > div > div > div > a > div.yKfJKb.row > div.col.col-7-12 > div.KzDlHZ`
//             },
//             productNameCheck2: (x)=>{
//                 return `#container > div > div.nt6sNV.JxFEK3._48O0EI > div.DOjaWF.YJG4Cf > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(${x}) > div > a.wjcEIp`;
//             },
//             priceCheck1: (x)=>{
//                 return `#container > div > div.nt6sNV.JxFEK3._48O0EI > div.DOjaWF.YJG4Cf > div:nth-child(2) > div:nth-child(${x}) > div > div > div > a > div.yKfJKb.row > div.col.col-5-12.BfVC2z > div.cN1yYO > div.hl05eU > div.Nx9bqj._4b5DiR`
//             },
//             priceCheck2: (x)=>{
//                 return `#container > div > div.nt6sNV.JxFEK3._48O0EI > div.DOjaWF.YJG4Cf > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(${x}) > div > a.DMMoT0 > div > div.Nx9bqj`;
//             }
//         };
//         let searchField = await driver.wait(until.elementLocated(By.css(flipkartSelectorMap.searchField)), 1000);
//         if(searchField){
//             searchField.sendKeys(productName)
//         }
//         else{
//             isSuccess = false;
//             errorMessage = "search field was not found";
//         }

//         if(isSuccess){
//             let searchButton = await driver.wait(until.elementLocated(By.css(flipkartSelectorMap.searchButton)), 1000);
//             if(searchButton){
//                 searchButton.click();
//             }
//             else{
//                 isSuccess = false;
//                 errorMessage = "search button was not found";
//             }
//         }

//         if(isSuccess){
//             let productPrice = await driver.wait(until.elementLocated(By.css(flipkartSelectorMap.priceCheck1(2))), 1000);
//             let productPrice2 = "";
//             if(productPrice){
//                 goWith = 1;
//             }
//             else if(productPrice2){
//                 goWith = 2;
//             }
//             else{
//                 goWith = 0;
//                 isSuccess = false;
//                 errorMessage = "product prices are not found";
//             }

//             if(goWith=1){
//                 for(let i=2; i<=6; i++){
//                     let productPrice = await driver.wait(until.elementLocated(By.css(flipkartSelectorMap.priceCheck1(i))), 1000);
//                     if(productPrice){
//                         flipkartPiceList.push(productPrice.getText());
//                     }
//                     else{
//                         flipkartPiceList.push("Null");
//                     }
//                 }
//             }
//             if(goWith=2){
//                 for(let i=1; i<=4; i++){
//                     let productPrice = await driver.wait(until.elementLocated(By.css(flipkartSelectorMap.priceCheck1(i))), 1000);
//                     if(productPrice){
//                         flipkartPiceList.push(productPrice.getText());
//                     }
//                     else{
//                         flipkartPiceList.push("Null");
//                     }
//                 }
//             }
//         }

//         if(isSuccess){
//             let productLabel = await driver.wait(until.elementLocated(By.css(flipkartSelectorMap.productNameCheck1(2))), 1000);
//             let productLabel2 = "";
//             if(productLabel){
//                 goWith = 1;
//             }
//             else if(productLabel2){
//                 goWith = 2;
//             }
//             else{
//                 goWith = 0;
//                 isSuccess = false;
//                 errorMessage = "product labels are not found";
//             }

//             if(goWith=1){
//                 for(let i=2; i<=6; i++){
//                     let productLabel = await driver.wait(until.elementLocated(By.css(flipkartSelectorMap.productNameCheck1(i))), 1000);
//                     if(productLabel){
//                         flipkartLabelList.push(productLabel.getText());
//                     }
//                     else{
//                         flipkartLabelList.push("Null");
//                     }
//                 }
//             }
//             if(goWith=2){
//                 for(let i=1; i<=4; i++){
//                     let productLabel = await driver.wait(until.elementLocated(By.css(flipkartSelectorMap.productNameCheck2(i))), 1000);
//                     if(productLabel){
//                         flipkartLabelList.push(productLabel.getText());
//                     }
//                     else{
//                         flipkartLabelList.push("Null");
//                     }
//                 }
//             }
//         }
//         console.log(flipkartLabelList);
//         console.log(flipkartPiceList);

//     } catch(error){
//         console.log("An error occured:",error)
//     } finally{
//         await driver.quit();
//     }
// })();

// priceComparison("iphone 13");