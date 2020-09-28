import { homePage } from "../pageobjects/home.page";
import { fundPage } from "../pageobjects/fund.page";

const boostAmount = 86;

describe("Continue with facebook", () => {
    it("Click on Continue facebook", () => {  
        homePage.open();
        homePage.clickContinueFacebook();
        homePage.loginFacebook('parthhansalia12@gmail.com','P@rth94293511651294');
    });
  });

  describe("Go to fund page", () => {
    it("Click on profile", () => {  
        fundPage.clickProfileButton();
    });
    it("Mentioned Boost amount", () => {  
      fundPage.enterBoostAmount(boostAmount);
      fundPage.clickOnBoost();
    });
  });

  describe("Fund page details", () => {
    it("Verify image", () => {  
        fundPage.verifyImage();
    });
    it("Verify fund page title", () => {  
      fundPage.verifyTitle('Mytestingpage');
    });
  });

  describe("Fund page verification", () => {
    it("Go to Fund page", () => {  
        fundPage.getBoostAmountOnFundPage(boostAmount);
    });
    it("Enter check out form information", () => {  
      fundPage.enterCheckoutFormInfo('parth@skuad.io','parth','BTM','360490','Gujarat');
    });
  });

  