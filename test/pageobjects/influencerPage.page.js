import Page from './page'


class InfluencerPage extends Page {


    get createFBPost() {return $('button=Create Facebook Post'); }

    waitForPageLoad(selector) {
        // if(!selector.isDisplayed()){
        // selector.waitForDisplayed(5000);
        // }
        expect(selector).toBeDisplayed;
    }

    clickCreateFBPost(){
        this.waitForPageLoad(this.createFBPost);
    }

    clickConnectButton(){
        
    }

}

export const influencerPage = new InfluencerPage();