import Page from './page'


class Fund extends Page {

    get clickOnProfile() {return $('//*[@id="root"]/div/div/div/div/nav/div/div[2]/div/ul/li[3]');}
    get boostAmount() {return $('(//*[@class="form-control"])[1]');}


    waitForPageLoad(selector) {
        if(!selector.isDisplayed()){
        selector.waitForDisplayed(5000);
        }
    }

    waitForEnabled(selector) {
        if(!selector.isElementEnabled){
        selector.waitForDisplayed(5000);
        }
    }

    clickProfileButton(){
        this.waitForPageLoad(this.clickOnProfile);
        this.clickOnProfile.click();  
    }

    enterBoostAmount(){
        this.waitForPageLoad(this.boostAmount);
        this.boostAmount.setValue('86');
        browser.pause(5000); 
    }
 


}


export const fundPage =  new Fund();