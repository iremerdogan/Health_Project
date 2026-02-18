const {I} = inject();

module.exports = {

    fields:{
        searchBar: '//input[@role="searchbox"]',
        patientInfoId: '//div[contains(@class,"cds--tag--gray")]//span[contains(@class,"_7O7")]'
    },

    buttons:{
        searchBtn: '//button[@aria-label="Search patient"]'
    },

    searchPatient: async function(patientId){
        await I.waitForElement(this.buttons.searchBtn);
        await I.click(this.buttons.searchBtn);
        await I.waitForVisible(this.fields.searchBar);
        await I.fillField(this.fields.searchBar, patientId);
        await I.wait(2); //because sometimes another element obscures it  
        await I.click(`//span[contains(text(),"${patientId}")]`);
        await I.waitForElement(this.fields.patientInfoId, 15);
    },
};



