const assert = require('assert');

import {
    getPageTitle
} from "../../driver/WebdriverIO";

import {
   goToWebsite, enterSelection, resetPostcode, setPostcode
} from "../../pages/SupplierPage";

import {
    enterEnergySelection
} from "../../pages/YourElectricityPage";

import {
    enterGasSelection
} from "../../pages/YourGasPage";

import {
    enterPreferences
} from "../../pages/PreferencesPage";

import {
    getCountOfResults
} from "../../pages/ResultsPage";

beforeEach(() => {
    goToWebsite();
});

describe('Happy path', () => {

    it('should have the right title', () => {
        expect(getPageTitle()).toBe("Energy - Compare Gas and Electricity Suppliers | Compare The Market")
    })

    it('basic journey with minimum setup', () => {
        enterSelection("PE2 6YS");
        enterEnergySelection(123);
        enterGasSelection(321);
        enterPreferences("test@test.com");
        expect (getCountOfResults()).toBeGreaterThan(0);
    })

    it('second entry with some settings preset', () => {
        resetPostcode();
        enterSelection("PE2 6YS");
        enterEnergySelection(123);
        enterGasSelection(321);
        enterPreferences("test@test.com", true);
        expect (getCountOfResults()).toBeGreaterThan(0);
    })
})