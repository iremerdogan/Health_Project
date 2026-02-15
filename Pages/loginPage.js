const { I } = inject();

let parameters = require('../Parameters/hospital1.json');

module.exports = {

  fields: {
    userName: 'input#username',
    password: 'input#password'
  },

  buttons: {
    continueBtn : '//button[contains(text(),"Continue")]',
    loginBtn : '//button[contains(text(),"Log in")]'
  },

  messages: {
    popupMsg: '//p[contains(text(),"Welcome")]'
  },

    closePopup: async function(){
      try {
      I.wait(5);
      const popup = await I.grabNumberOfVisibleElements(this.messages.popupMsg);
      if (popup != 0)
      {
        I.click('//label[@class="cds--radio-button__label"]'); //click the first location
        I.click('//button[@class="-esm-login__location-picker__confirmButton___mHNSY cds--btn cds--btn--primary"]');
      }
    } catch (e) {}},

    login: async function()
    {
      I.amOnPage(parameters['url']);
      I.waitForElement(this.fields.userName, 30);
      I.fillField(this.fields.userName, parameters['userName']);
      I.click(this.buttons.continueBtn);
      I.waitForElement(this.fields.password, 20);
      I.fillField(this.fields.password, parameters['password']);
      I.waitForElement(this.buttons.loginBtn);
      I.click(this.buttons.loginBtn);
      await this.closePopup();
    },
}
