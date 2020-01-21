export function enterEnergySelection(kwh) {
    $("#electricity-usage").waitForDisplayed();
    const elem = $("#electricity-usage");
    elem.setValue(kwh)
    $("#goto-your-energy").waitForDisplayed();
    $("#goto-your-energy").click();
    browser.waitUntil(() => {
        console.log($("h1.main-heading").getText());
        return $("h1.main-heading").getText() === 'Your gas'
    }, 5000, 'expected Your gas');
}