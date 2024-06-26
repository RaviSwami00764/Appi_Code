const {Builder, By, until} = require("selenium-webdriver");


(async function priceComparison(){
    let driver = await new Builder().forBrowser("chrome").build();
    let isSuccess = true;
    let errorMessage = "";
    let goWith = 1;
    let flipkartPiceList = [];
    let flipkartLabelList = [];
    let productName = "iphone 13";
    try{
        await driver.get("https://www.flipkart.com/");
        
        let flipkartSelectorMap = {
            searchField : "#container > div > div.q8WwEU > div > div > div > div > div:nth-child(1) > div > div.css-175oi2r.r-13awgt0.r-1iqfa7g.r-60vfwk > div > div._2nl6Ch > div._2NhoPJ > header > div._3ZqtNW > div._3NorZ0._3jeYYh > form > div > div > input",
            searchButton: "#container > div > div.q8WwEU > div > div > div > div > div:nth-child(1) > div > div.css-175oi2r.r-13awgt0.r-1iqfa7g.r-60vfwk > div > div._2nl6Ch > div._2NhoPJ > header > div._3ZqtNW > div._3NorZ0._3jeYYh > form > div > button",
            productNameCheck1: (x)=>{
                return `#container > div > div.nt6sNV.JxFEK3._48O0EI > div.DOjaWF.YJG4Cf > div:nth-child(2) > div:nth-child(${x}) > div > div > div > a > div.yKfJKb.row > div.col.col-7-12 > div.KzDlHZ`
            },
            productNameCheck2: (x)=>{
                return `#container > div > div.nt6sNV.JxFEK3._48O0EI > div.DOjaWF.YJG4Cf > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(${x}) > div > a.wjcEIp`;
            },
            priceCheck1: (x)=>{
                return `#container > div > div.nt6sNV.JxFEK3._48O0EI > div.DOjaWF.YJG4Cf > div:nth-child(2) > div:nth-child(${x}) > div > div > div > a > div.yKfJKb.row > div.col.col-5-12.BfVC2z > div.cN1yYO > div.hl05eU > div.Nx9bqj._4b5DiR`
            },
            priceCheck2: (x)=>{
                return `#container > div > div.nt6sNV.JxFEK3._48O0EI > div.DOjaWF.YJG4Cf > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(${x}) > div > a.DMMoT0 > div > div.Nx9bqj`;
            }
        };
        let searchField = await driver.wait(until.elementLocated(By.css(flipkartSelectorMap.searchField)), 1000);
        if(searchField){
            searchField.sendKeys(productName)
        }
        else{
            isSuccess = false;
            errorMessage = "search field was not found";
        }

        if(isSuccess){
            let searchButton = await driver.wait(until.elementLocated(By.css(flipkartSelectorMap.searchButton)), 1000);
            if(searchButton){
                searchButton.click();
            }
            else{
                isSuccess = false;
                errorMessage = "search button was not found";
            }
        }

        if(isSuccess){
            for(let i=2; i<=6; i++){
                let productPrice = await driver.wait(until.elementLocated(By.css(flipkartSelectorMap.priceCheck1(i))), 1000);
                if(productPrice){
                    flipkartPiceList.push(productPrice.getText());
                }
                else{
                    flipkartPiceList.push("Null");
                }
            }
        }

        if(isSuccess){
            for(let i=2; i<=6; i++){
                let productLabel = await driver.wait(until.elementLocated(By.css(flipkartSelectorMap.productNameCheck1(i))), 1000);
                if(productLabel){
                    flipkartLabelList.push(productLabel.getText());
                }
                else{
                    flipkartLabelList.push("Null");
                }
            }
        }
        console.log(flipkartLabelList);
        console.log(flipkartPiceList);

    } catch(error){
        console.log("An error occured:",error)
    } finally{
        await driver.quit();
    }
})();

// priceComparison("iphone 13");