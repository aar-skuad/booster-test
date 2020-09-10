import Page from './page'


class ConnectPages extends Page {

    get listOfPages() { return $$(''); }
    get settingsButton() {return $(''); }
    get connectButton() {return $(''); }

    waitForPageLoad(selector) {
        if(!selector.isDisplayed()){
        selector.waitForDisplayed(5000);
        }
    }

    selectFBPage(){

    }

    clickSettingsButton(){

    }

    clickConnectButton(){

    }

}