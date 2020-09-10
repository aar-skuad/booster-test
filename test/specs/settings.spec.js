import { homePage } from "../pageobjects/home.page";
import { settings } from "../pageobjects/settings.page";

describe("Continue with facebook", () => {
    it("Click on Continue facebook", () => {  
        homePage.open()
        homePage.clickContinueFacebook();
        homePage.loginFacebook('parthhansalia12@gmail.com','P@rth94293511651294');
    });
  });

  describe("Click on Settings", () => {
    it("Click on settings from drop down", () => {  
        settings.clickDropDown();
        settings.clickSettingsButton();
    });
  });

  // describe("Verify Contact information and notifications", () => {
  //   it("Click on Save button and verify the information", () => {  
  //       settings.enterContactInformation('test123','testing@gmail.com');
  //       settings.clickNotificationCheckBox();
  //       settings.clickSaveButton();
  //       settings.verifyContactInformation('test123','testing@gmail.com');
  //       settings.verifyNotificationCheckbox();
  //   });
  // });

  describe("Content Settings", () => {
    it("Get content URL from drop down", () => {  
        settings.getContentSettingsURL();
    });
  });