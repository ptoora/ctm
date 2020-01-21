export function goToWebsite() {
    console.log("Using Url:" + browser.options.baseUrl)
    browser.url(browser.options.baseUrl);
}

export function setPostcode(postcode) {
    $("#your-postcode").waitForDisplayed();
    const elem = $("#your-postcode");
    elem.setValue(postcode)
    $("#find-postcode").waitForDisplayed();
    $("#find-postcode").click();
    browser.waitUntil(() => {
        return $("#change-postcode").getText() === 'Change postcode'
    }, 5000, 'expected Change postcode');
}

export function resetPostcode() {
    $("#change-postcode").waitForDisplayed();
    $("#change-postcode").click();
}

export function enterSelection(postcode) {
    setPostcode(postcode);
    $("#goto-your-supplier-details").waitForDisplayed();
    $("#goto-your-supplier-details").click();
    browser.waitUntil(() => {
        return $(".main-heading").getText() === 'Your electricity'
    }, 5000, 'expected Your electricity');
}