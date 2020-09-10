import { homePage } from "../pageobjects/home.page";
import {influencerPage} from "../pageobjects/influencerPage.page"


describe("Continue with facebook", () => {
  it("Click on Continue facebook", () => {  
      homePage.open()
      homePage.clickContinueFacebook();
<<<<<<< HEAD
      homePage.loginFacebook('','');
=======
      homePage.loginFacebook('8985709512','@62Madhava');
>>>>>>> Settings and fund page automation
      influencerPage.clickCreateFBPost();

      //verification of login
  });
});j


// describe("Continue with Twitter", () => {
//     it("Click on Continue Twitter", () => {  
//         homePage.open();
//         homePage.clickContinueWithTwitter();
//         homePage.loginTwitter('','');
//         //verificaction of login
//     });
// });
  

