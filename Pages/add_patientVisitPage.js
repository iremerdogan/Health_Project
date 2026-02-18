const {I} = inject();

module.exports = {

    fields:{
        cmbLocation: 'input#location',
    },

    messages:{
        noVitalSigns: '//p[contains(text(),"There are no vital signs")]',
        successMsg: '//div[@class="cds--actionable-notification__subtitle"][contains(text(),"Visit started")]',
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
        I.click(this.buttons.actionsBtn);
        const endVstBtn = await I.grabNumberOfVisibleElements('//button//div[contains(text(),"End active visit")]');
        
        //if there's a visit, skip the process and switch to add vitals test
        if (endVstBtn > 0){} 
        
        //if the message "no vital signs" appears and there is no visit to end
        else if (noVitalSigns > 0 & endVstBtn == 0){

        //we can add a new visit as there are no vitals recorded and no visit to end 
        I.waitForElement(this.buttons.addVisitBtn, 10);
        I.click(this.buttons.addVisitBtn);
        I.waitForElement(this.fields.cmbLocation, 5);
        I.click(this.fields.cmbLocation);
        I.pressKey(['Control', 'a']);
        I.clearField(this.fields.cmbLocation);
        I.waitForElement(this.buttons.cmbMobileClinic, 10);
        I.click(this.buttons.cmbMobileClinic);
        I.waitForElement(this.buttons.cmbHomeVisit, 10);
        I.click(this.buttons.cmbHomeVisit);
        I.waitForElement(this.buttons.cmbPunctuality, 5);
        I.click(this.buttons.cmbPunctuality);
        I.click(this.buttons.startVisit);
        I.waitForElement(this.messages.successMsg, 5);
        I.seeElement(this.messages.successMsg);}
    }
    };
