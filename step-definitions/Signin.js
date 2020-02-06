const assert = require('assert');
var fs = require('fs');
const parseJson = require('parse-json');
//import {Given,When,Then} from 'cucumber'
var {defineSupportCode} = require("cucumber");
var date=new Date();
var textByLine =  fs.readFileSync("TestData.json", "binary", async function(err, data) {
    return await new Buffer( data);
});


var testData = parseJson(textByLine);

defineSupportCode(function({Given,When,Then}){

    Given(/^I'm on home page$/, async function(){
        browser.url(testData.URL);
        browser.maximizeWindow();
    
});

    When(/^Click Signin on the landing page$/,async function(){
        // Click on signin button
        const elm= await $(testData.signInButton);
        await elm.click();
   
   
});

    Then(/^Create Account by entering email address$/, async function(){
        const emailBox= await $(testData.emailBox);
        // enter rendom email address
        await emailBox.setValue("abc12344321"+date.getMinutes() + date.getSeconds() + "@gmail.com");
        const emailButton= await $(testData.createButton);
        await emailButton.click();
    
});

    Then(/^Fill personal information$/, async function(){
       
        //select gender
        const gender= await $(testData.gender1);
        if(gender.isSelected===false){
            await gender.click(); 
        }
        //enter customer first name
         const FirstName= await $(testData.custfirstName);
         await FirstName.setValue(testData.firstNameValue);
        //enter customer last name
        const lastName= await $(testData.custlastName);
        await lastName.setValue(testData.lastNameValue);
        //enter password
        const pass= await $(testData.passwd);
        await pass.setValue(testData.passValue);
        //enter date of birth
        const day= await $(testData.day);
        await day.selectByIndex(3);
        const month= await $(testData.month);
        await month.selectByIndex(3);
        const year= await $(testData.year);
        await year.selectByIndex(3);
    
});

    Then(/^Fill address$/, async function(){
        
        //enter first name
        const firstNameAddress= await $(testData.addFirstName);
        await firstNameAddress.setValue(testData.firstAddNameValue);
        //enter last name
        const lastNameAddress= await $(testData.addLastName);
        await lastNameAddress.setValue(testData.lastaddNameValue);
        //enter company name
        const company= await $(testData.companyName);
        await company.setValue(testData.compValue);
        //enter address
        const add= await $(testData.addLine1);
        await add.setValue(testData.addLine1Value);
        //enter city
        const city= await $(testData.cityAdd);
        await city.setValue(testData.cityName);
        //enter state
        const state= await $(testData.stateAdd);
        await state.selectByVisibleText(testData.stateName);
        //enter zip code
        const zipCode= await $(testData.postCode);
        await zipCode.setValue(testData.zipCodeValue);
        //enter country
        const country= await $(testData.countryAdd);
        await country.selectByVisibleText(testData.cauntryName);
        //enter mobile num
        const mobileNum= await $(testData.mobileNumber);
        await mobileNum.setValue(testData.mobileNum);
        //enter address alisas
        const addressAlias= await $(testData.addAllias);
        await addressAlias.clearValue();
        await addressAlias.setValue(testData.addAlliasVal);
});

    Then(/^Click Register$/, async function(){
        //click registerbutton
        const registerButton= await $(testData.registerAccount);
        await registerButton.click();

});
    Then(/^Validate correct name and surname is displayed on landing screen$/, async function(){
        //validate username on landing page
        const userName= await $(testData.signedInUser);
        assert.equal(await userName.getText(), 'Nitin Kumar');
   
});

});
