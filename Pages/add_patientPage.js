const { I } = inject();

let loginPage = require("../Pages/loginPage");

let parameters = require("../Parameters/hospital1.json")

module.exports = {

  
    fields:{
        firstName: 'input#givenName',
        familyName: 'input#familyName',
        birthDate: '//div[@class="cds--date-picker-input__wrapper _7eqzzRk9Nly5JXyWWDkZew== kCZM4leo22nH97QO2RKzlQ=="]',
        birthDay: '//span[@data-type="day"]',
        birthMonth: '//span[@data-type="month"]',
        birthYear: '//span[@data-type="year"]',
        addressline1: 'input#address1',
        addressCountry: 'input#country',
        patientPhone: 'input#phone' 
    },

    buttons:{
        addPatientBtn: '//button[@name="AddPatientIcon"]',
        dateForward: '//button[@id="react-aria8241816415-:r3b:"]',
        registerBtn: '//button[contains(text(),"Register patient")]'
    },

    options:{
        genderFemOption: '//span[contains(text(),"Female")]',
    },

    messages:{
        successMsg: "//*[@class='cds--actionable-notification__button-wrapper']",
        patientInfo: '//span[contains(text(),"Vitals and biometrics")]'
    },

    addPatient: function(){
    
        I.waitForElement(this.buttons.addPatientBtn, 20);
        I.click(this.buttons.addPatientBtn);
        I.waitForElement(this.fields.firstName, 20);
        I.fillField(this.fields.firstName, parameters['patient1Name']);
        I.waitForElement(this.fields.familyName);
        I.fillField(this.fields.familyName, parameters['patient1Surname']);
        I.waitForElement(this.options.genderFemOption);
        I.click(this.options.genderFemOption);

        //choose the birth date
        I.waitForElement(this.fields.birthDate);

        I.click(this.fields.birthDay);
        I.pressKey('Ctrl', 'a');
        I.type('08');

        I.click(this.fields.birthMonth);
        I.pressKey('Ctrl', 'a');
        I.type('08');
        
        I.click(this.fields.birthYear);
        I.pressKey('Ctrl', 'a');
        I.type('1992');


        I.waitForElement(this.fields.addressline1);
        I.fillField(this.fields.addressline1, parameters['addressopt1']);
        I.waitForElement(this.fields.addressCountry);
        I.fillField(this.fields.addressCountry, parameters['countryopt1']);
        I.waitForElement(this.fields.patientPhone);
        I.fillField(this.fields.patientPhone, parameters['patientPhone']);
        I.waitForElement(this.buttons.registerBtn);
        I.click(this.buttons.registerBtn);
        I.waitForElement(this.messages.successMsg, 6);
        I.seeElement(this.messages.successMsg);
        I.waitForElement(this.messages.patientInfo, 10);
        I.seeElement(this.messages.patientInfo);
},

};
