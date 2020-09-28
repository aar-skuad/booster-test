import { homePage } from "../pageobjects/home.page";
import { influencerPage } from "../pageobjects/influencerPage.page";


describe("Continue with facebook", () => {
    it("Click on Continue facebook", () => {  
        homePage.open();
        homePage.clickContinueFacebook();
        homePage.loginFacebook('parthhansalia12@gmail.com','P@rth94293511651294');
    });
  });

  
  describe("Go to influencer page", () => {
    it("Click on profile", () => {  
        influencerPage.clickOnProfileButton();
    });
  });

  describe("Verify Hide Post", () => {
    it("Click on Hide post checkbox", () => {  
        influencerPage.clickOnProfileButton();
    });
    it("Click on Hide post checkbox", () => {  
      influencerPage.verifyHidePostCheckBox();
    });
    it("Click on Hide post checkbox", () => {  
      influencerPage.verifyHideInfluencerCheckBox();
    });
  });

  describe("Verify Donor report", () => {
    it("Click on Donor report button", () => {  
        influencerPage.verifyDonorReport();
    });
  });

  describe("Verify Pin functionality", () => {
    it("Click on Pin", () => {  
        influencerPage.verifyPin();

    });
  });

  describe("Verify Create facebook unpublished post for functionality", () => {
    it("Click on createFBButton", () => {  
        influencerPage.verifyCreateFBPost();
    });
    it("Enter message on New post Text", () => {  
      influencerPage.verifyNewPostText('My Unpublished Post....');
  });
  });

  // describe("Verify Create facebook published post for functionality", () => {
  //   it("Click on createFBButton", () => {  
  //       influencerPage.verifyNewPublishedPost('My Published Post.....');
  //   });
  // });