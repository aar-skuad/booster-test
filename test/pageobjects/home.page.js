import Page from './page'


class HomePage extends Page {

    get continueWithFacebook() { return $('//button[contains(text(),"Continue with Facebook")]'); }
    get continueWithTwitter() { return $('//button[contains(text(),"Continue with Twitter")]'); }
    get createAccount() { return $('//button[contains(text(),"CREATE ACCOUNT")]'); }
    get joinUsingFB() { return $('//button[contains(text(),"Join Using Facebook")]'); }
    get joinUsingTwitter() { return $('//button[contains(text(),"Join Using Twitter")]'); }
    get fbEmailInput() {return $('[name="email"]'); }
    get fbPassInput() {return $('[name="pass"]'); }
    get fbLoginButton() {return $('[name="login"]'); }
    get twitterEmailInput() {return $('[name="email"]'); }
    get twitterPassInput() {return $('[name="pass"]'); }
    get twitterLoginButton() {return $('[name="login"]'); }


    waitForPageLoad(selector) {
        // if(!this.continueWithFacebook.isDisplayed()){
        //   //continueWithFacebook().waitForDisplayed(5000);
        //   this.continueWithFacebook.waitForDisplayed(5000);
        // }

        // if(!selector.isDisplayed()){
        //   selector.waitForDisplayed(5000);
        // }
        expect(selector).toBeDisplayed;
    }

    clickContinueFacebook() {
      this.waitForPageLoad(this.continueWithFacebook);
      this.continueWithFacebook.click();
    }

    clickContinueTwitter(){
      this.waitForPageLoad(this.continueWithTwitter);
      this.continueWithTwitter.click();
    }

    clickCreateAccount(){
      this.waitForPageLoad(this.createAccount);
      this.createAccount.click();
    }

    loginFacebook(username,password){
        this.waitForPageLoad(this.fbEmailInput);
        this.fbEmailInput.setValue(username);
        this.fbPassInput.setValue(password);
        this.fbLoginButton.click();
    }

    loginTwitter(username,password){
      this.waitForPageLoad(this.twitterEmailInput);
      this.twitterEmailInput.setValue(username);
      this.twitterPassInput.setValue(password);
      this.twitterLoginButton.click();
    }


    
}


export const homePage = new HomePage();