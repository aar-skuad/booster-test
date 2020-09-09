import Page from './page'


class Settings extends Page {

    get contactNameInput() {return $('input#name'); }
    get contactEmailInput() {return $('input#email'); }
    get contactSaveButton() {return $('button=Save'); }
    get connectBankAccount() {return $('button=Connect Bank Account'); }

    waitForPageLoad(selector) {
        if(!selector.isDisplayed()){
        selector.waitForDisplayed(5000);
        }
    }

    clickSettingsButton(){

    }

    clickConnectButton(){
        
    }

}


export const settings = new Settings();