import Page from './page'
import db from "../pgAdaptor"


class Fund extends Page {

    get clickOnProfile() {return $('//*[@id="root"]/div/div/div/div/nav/div/div[2]/div/ul/li[3]');}
    get boostAmount() {return $('(//*[@class="form-control"])[1]');}
    get clickOnboostButton() {return $('(//*[@class="btn btn-primary"])[3]');}
    get getBoostAmount() {return $('(//*[@class="form-control"])[1]');}
    get getCheckOutBoostAmount() {return $('div.d-flex.justify-content-end.col');}
    get checkoutEmail() {return $('[name="email"]'); }
    get checkoutName() {return $('[name="name"]'); }
    get checkoutAddress() {return $('[name="address"]'); }
    get checkoutPostalCode() {return $('[name="postalCode"]'); }
    get checkoutCity() {return $('[name="city"]'); }
    get checkoutRegion() {return $('[name="region"]'); }
    get employeedCheckbox() {return $('(//*[@class="form-check-input"])[1]');}
    get communicationByEmail() {return $('(//*[@class="form-check-input"])[2]');}
    get testPageCommunicationByEmail() {return $('(//*[@class="form-check-input"])[5]');}
    get clickPayButton() {return $('button.w-100.mb-4.mt-3.btn.btn-primary');}
    get fundPageImage() {return $('img._28apf4');}
    get fundPageTitle() {return $('h1._2e6d11');}



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

    enterBoostAmount(boostAmount){
        this.waitForPageLoad(this.boostAmount);
        this.boostAmount.setValue(boostAmount);
    }

    clickOnBoost(){
        this.clickOnboostButton.click();
    }

    getBoostAmountOnFundPage(boostAmount){
        this.getBoostAmount.getValue() == boostAmount && this.getCheckOutBoostAmount.getValue() == boostAmount;
        browser.pause(5000); 
    }

    enterCheckoutFormInfo(email,name,address,pincode,city){
        this.checkoutEmail.scrollIntoView();
        browser.pause(3000);
        this.checkoutEmail.setValue(email);
        this.checkoutName.setValue(name);
        this.checkoutAddress.setValue(address);
        this.checkoutPostalCode.setValue(pincode);
        this.checkoutCity.setValue(city);
        this.checkoutRegion.selectByAttribute('value', 'DC');
        if (this.employeedCheckbox.isSelected()) {
            console.log('employed checkbox is selected')
          } else {
            this.employeedCheckbox.click();
          }
        this.communicationByEmail.click();
        this.testPageCommunicationByEmail.click();
        this.clickPayButton.scrollIntoView();
        browser.pause(3000);
        this.clickPayButton.click();
        browser.pause(5000); 
    }

    verifyImage() {
        this.fundPageImage.isDisplayed();
    }

    verifyTitle(title) {
        this.fundPageTitle.getText() == title;
    }

}


export const fundPage =  new Fund();