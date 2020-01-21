export function goToWebsite() {
    console.log("Using Url:" + browser.options.baseUrl)
    browser.url(browser.options.baseUrl);
}

export function getPageTitle() {
    return browser.getTitle();
}

export function getHeader() {
    $(".main-heading").waitForDisplayed();
    return $(".main-heading").getText();
}

export function enterSelection(postcode) {
    $("#your-postcode").waitForDisplayed();
    const elem = $("#your-postcode");
    elem.setValue(postcode)
    $("#find-postcode").waitForDisplayed();
    $("#find-postcode").click();
    browser.waitUntil(() => {
        return $("#change-postcode").getText() === 'Change postcode'
    }, 5000, 'expected Change postcode');
    $("#goto-your-supplier-details").waitForDisplayed();
    $("#goto-your-supplier-details").click();
    browser.waitUntil(() => {
        return $(".main-heading").getText() === 'Your electricity'
    }, 5000, 'expected Your electricity');
}