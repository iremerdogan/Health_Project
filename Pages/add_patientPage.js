const { I } = inject();

let loginPage = require("../Pages/loginPage");

let parameters = require("../Parameters/hospital1.json");

const {faker} = require('@faker-js/faker');

module.exports = {

  
    fields:{
        firstName: 'input#givenName',
        familyName: 'input#familyName',
        birthDate: '//div[@class="cds--date-picker-input__wrapper _7eqzzRk9Nly5JXyWWDkZew== kCZM4leo22nH97QO2RKzlQ=="]',
        birthDay: '//span[@data-type="day"]',
        birthMonth: '//span[@data-type="month"]',
        birthYear: '//span[@data-type="year"]',
        addressCity: 'input#cityVillage',
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

    patientData: {},

    addPatient: function(){

        const firstName = faker.person.firstName('female');
        const lastName = faker.person.lastName();
        const city = faker.location.city();
        const country = faker.location.country();
        const phoneNumber = faker.phone.number();

        const birthDate = faker.date.birthdate();
        const birthDay = String(birthDate.getDate()).padStart(2, '0');
        const birthMonth = String(birthDate.getMonth() +1).padStart(2, '0');
        const birthYear = String(birthDate.getFullYear());

        this.patientData.firstName = firstName;
        this.patientData.lastName = lastName;
        this.patientData.city = city;
        this.patientData.country = country;
        this.patientData.birthDate = birthDate;
        this.patientData.birthDay = birthDay;
        this.patientData.birthMonth = birthMonth;
        this.patientData.birthYear = birthYear; 
        this.patientData.phoneNumber = phoneNumber;
        
        console.log(this.patientData);
    
        I.waitForElement(this.buttons.addPatientBtn, 20);
        I.click(this.buttons.addPatientBtn);
        I.waitForElement(this.fields.firstName, 20);
        I.fillField(this.fields.firstName, firstName);
        I.waitForElement(this.fields.familyName);
        I.fillField(this.fields.familyName, lastName);
        I.waitForElement(this.options.genderFemOption);
        I.click(this.options.genderFemOption);

        //choose the birth date
        I.waitForElement(this.fields.birthDate);

        I.click(this.fields.birthDay);
        I.pressKey(['Ctrl', 'a']);
        I.type(birthDay);

        I.click(this.fields.birthMonth);
        I.pressKey(['Ctrl', 'a']);
        I.type(birthMonth);
        
        I.click(this.fields.birthYear);
        I.pressKey(['Ctrl', 'a']);
        I.type(birthYear);


        I.waitForElement(this.fields.addressCity);
        I.fillField(this.fields.addressCity, city);
        I.waitForElement(this.fields.addressCountry);
        I.fillField(this.fields.addressCountry, country);
        I.waitForElement(this.fields.patientPhone);
        I.fillField(this.fields.patientPhone, phoneNumber);
        I.waitForElement(this.buttons.registerBtn);
        I.click(this.buttons.registerBtn);
        I.waitForElement(this.messages.successMsg, 6);
        I.seeElement(this.messages.successMsg);
        I.waitForElement(this.messages.patientInfo, 10);
        I.seeElement(this.messages.patientInfo);
},

};
