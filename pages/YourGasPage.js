export function enterGasSelection(kwh) {
    $("#gas-usage").waitForDisplayed();
    const elem = $("#gas-usage");
    elem.setValue(kwh)
    $("#goto-your-energy").waitForDisplayed();
    $("#goto-your-energy").click();
    browser.waitUntil(() => {
        return $(".main-heading").getText() === 'Your preferences'
    }, 5000, 'expected Your preferences');
}