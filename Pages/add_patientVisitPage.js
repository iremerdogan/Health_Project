const {I} = inject();

let parameters = require('../Parameters/hospital1.json');

module.exports = {

    fields:{
        cmbLocation: 'input#location',
    },

    messages:{
        noVitalSigns: '//p[contains(text(),"There are no vital signs")]',
        successMsg: '//div[contains(text(),"Visit started")]',
    },

    buttons:{
        actionsBtn: 'button#custom-actions-overflow-menu-trigger',
        addVisitBtn: '//button//div[contains(text(),"Add visit")]',
        cmbPunctuality: '//div//option[contains(text(),"Select an option")]',
        cmbOnTime: '//div//option[contains(text(),"On time")]',
        cmbHomeVisit: '//div//span[contains(text(),"Home Visit")]',
        cmbMobileClinic: '//li//div[contains(text(),"Mobile Clinic")]',
        startVisit: '//button//span[contains(text(),"Start visit")]', 
    },

    patientVisit: async function(){
        const noVitalSigns = await I.grabNumberOfVisibleElements(this.messages.noVitalSigns);
        if (noVitalSigns > 0){
        I.click(this.buttons.actionsBtn);
        I.waitForElement(this.buttons.addVisitBtn, 10);
        I.click(this.buttons.addVisitBtn);
        I.waitForElement(this.fields.cmbLocation, 5);
        I.click(this.fields.cmbLocation);
        I.clearField(this.fields.cmbLocation);
        I.waitForElement(this.buttons.cmbMobileClinic, 5);
        I.click(this.buttons.cmbMobileClinic);
        I.waitForElement(this.buttons.cmbHomeVisit, 5);
        I.click(this.buttons.cmbHomeVisit);
        I.waitForElement(this.buttons.cmbPunctuality, 5);
        I.click(this.buttons.cmbPunctuality);
        I.click(this.buttons.startVisit);
        I.waitForElement(this.messages.successMsg, 2);
        I.seeElement(this.messages.successMsg);
    }
    }
};