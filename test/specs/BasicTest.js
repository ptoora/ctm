const assert = require('assert');

import {
   goToWebsite, getPageTitle, enterSelection, getHeader
} from "../../pages/SupplierPage";

beforeEach(() => {
    goToWebsite();
});

describe('Happy path', () => {

    it('should have the right title', () => {
        expect(getPageTitle()).toBe("Energy - Compare Gas and Electricity Suppliers | Compare The Market")
    })

    it('validate basic journey', () => {
        enterSelection("PE2 6YS")
        expect(getHeader()).toBe("Your electricity");
    })
})