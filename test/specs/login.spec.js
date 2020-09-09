import { homePage } from "../pageobjects/home.page";
import {influencerPage} from "../pageobjects/influencerPage.page"


describe("Continue with facebook", () => {
  it("Click on Continue facebook", () => {  
      homePage.open()
      homePage.clickContinueFacebook();
      homePage.loginFacebook('','');
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
  

