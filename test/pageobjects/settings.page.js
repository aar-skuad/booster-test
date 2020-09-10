import Page from './page'


class Settings extends Page {

    get clickOnDropDown() {return $('div.h62eze.dropdown'); }
    get clickOnSettings() {return $('//*[@class="_2vbaas dropdown-menu dropdown-menu-right show"]/button[1]');}
    get contactNameInput() {return $('input#name'); }
    get contactEmailInput() {return $('input#email'); }
    get clickOnSaveButton() {return $('button.mb-5.btn.btn-primary'); }
    get connectBankAccount() {return $('button=Connect Bank Account'); }
    get notificationsCheckbox1() {return $('//*[@class="custom-checkbox custom-control"][1]'); }
    get notificationsCheckbox2() {return $('//*[@class="custom-checkbox custom-control"][2]'); }
    get contentURLDropDown() {return $('//*[@id="root"]/div/div/div/div/div[1]/div/div[2]/div/div[2]/div/div[2]/div[1]/select');}


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

    clickDropDown(){
        this.waitForPageLoad(this.clickOnDropDown);
        this.clickOnDropDown.click();   
    }

    clickSettingsButton(){
        this.waitForPageLoad(this.clickOnSettings);
        this.clickOnSettings.click();
    }

    enterContactInformation(name,email) {
        this.waitForPageLoad(this.contactNameInput);
        this.contactNameInput.setValue(name);
        this.contactEmailInput.setValue(email);
    }

    clickNotificationCheckBox(){
        this.waitForPageLoad(this.notificationsCheckbox1);
        this.notificationsCheckbox1.click();
        this.notificationsCheckbox2.click();
        browser.pause(5000);
    }

    clickSaveButton(){
        this.waitForPageLoad(this.clickOnSaveButton);
        this.clickOnSaveButton.click();
        browser.pause(7000);
    }

    verifyContactInformation(name,email){
        this.waitForEnabled(this.clickOnSaveButton);
        var actualName = this.contactNameInput.getText();
        var actualEmail = this.contactEmailInput.getText();
        actualName == name;
        actualEmail == email;
        browser.pause(5000);
    }

    verifyNotificationCheckbox(){
        !this.notificationsCheckbox1.isSelected();
        !this.notificationsCheckbox2.isSelected();
    }

    getContentSettingsURL(){
        browser.pause(5000);
        console.log('Droppaaaaa', this.contentURLDropDown.selectByIndex(0).getText);

    }

}


export const settings = new Settings();