const {I} = inject();

let parameters = require('../Parameters/hospital1.json');

module.exports = {

    fields:{
        searchBar: '//input[@placeholder="Search for a patient by name or identifier number"]',
        patientInfoId: '//div[contains(@class,"cds--tag--gray")]//span[contains(@class,"_7O7")]'
    },

    buttons:{
        searchBtn: '//button[@aria-label="Search patient"]'
    },

    searchPatient: async function(patientId){
        await I.waitForElement(this.buttons.searchBtn);
        await I.click(this.buttons.searchBtn);
        await I.fillField(this.fields.searchBar, patientId);
        await I.click(`//span[contains(text(),"${patientId}")]`);
        await I.waitForElement(this.fields.patientInfoId, 15);
    },
};



