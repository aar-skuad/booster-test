import Page from './page'


class InfluencerPage extends Page {


    get clickOnProfile() {return $('(//*[@class="nav-link"])[2]');}
    get clickHidePostCheckbox() {return $('[name="hideAllPosts"]');}
    get clickHideInfluencerCheckbox() {return $('(//*[@class="form-check-input"])[2]');}
    get clickInfluencerDetails() {return $('//*[@class="_29pjf3"]');}
    get clickDonorreport() {return $('(//*[@class="btn btn-primary"])[2]');}
    get clickReportSendButton() {return $$('(//*[@class="btn btn-primary"])');}
    get clickReportCloseButton() {return $('button.close');}
    get clickPin() {return $('//*[@id="root"]/div/div/div/div/div[1]/div/div[3]/div/div/div/div/div/div/div/ul/div[1]/div/div/li/div[2]/div/div[3]/div[1]');}
    get clickFBPostbutton() {return $('(//*[@class="btn btn-primary"])[1]');}
    get newPostTextArea() {return $('textarea._4r7krg.form-control');}
    get unpublishedCheckBox() {return $('(//*[@class="_28k4wb form-check-input"])[1]');}
    get postButton() {return $('button._2ws2yz.btn.btn-primary');}
    get chooseMediaButton() {return $('[name="file"]');}

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

    clickOnProfileButton() {
        this.waitForPageLoad(this.clickOnProfile);
        this.clickOnProfile.click();
    }

    //put assertion if element not display then this case should be passed
    verifyHidePostCheckBox(){
        this.waitForPageLoad(this.clickHidePostCheckbox);
        this.clickHidePostCheckbox.click();
    }

    //put assertion if element not display then this case should be passed
    verifyHideInfluencerCheckBox(){
        this.waitForPageLoad(this.clickHideInfluencerCheckbox);
        this.clickHideInfluencerCheckbox.click();
        browser.pause(2000);
        this.clickInfluencerDetails.isDisplayed();
        browser.pause(2000);

    }

    verifyDonorReport(){
        this.waitForPageLoad(this.clickDonorreport);
        this.clickDonorreport.click();
        browser.pause(3000);
        this.clickReportSendButton.filter(
            element => {
                if(element.getText() == 'Send') {element.click();}
            });
        browser.pause(3000);
    }

    verifyPin(){
        this.clickHidePostCheckbox.click();
        this.clickHideInfluencerCheckbox.click();
        this.waitForPageLoad(this.clickPin);
        this.clickPin.click();
    }

    verifyCreateFBPost(){
        this.waitForPageLoad(this.clickFBPostbutton);
        this.clickFBPostbutton.click();
        browser.pause(2000);
    }
    verifyNewPostText(textValue){
        this.waitForPageLoad(this.newPostTextArea);
        this.newPostTextArea.setValue(textValue);
        const path = require('path');
        const filePath = path.join('/Users/parthhansalia/Desktop/fbImage.png');
        const remoteFilePath = browser.uploadFile(filePath);
        this.chooseMediaButton.setValue(remoteFilePath);
        browser.pause(10000);
        this.unpublishedCheckBox.click();
        this.postButton.click();
        browser.pause(15000);
    }

    verifyNewPublishedPost(textValue){
        this.waitForPageLoad(this.clickFBPostbutton);
        this.clickFBPostbutton.click();
        this.waitForPageLoad(this.newPostTextArea);
        this.newPostTextArea.setValue(textValue);
        this.postButton.click();
        browser.pause(5000);
    }

}

export const influencerPage = new InfluencerPage();