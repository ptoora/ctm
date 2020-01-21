export function enterPreferences(email, alreadyConfirmed=false) {

    $(".energy-gas-electricity.variable-bill-1").waitForDisplayed();
    var elem = $(".energy-gas-electricity.variable-bill-1");
    elem.click()
    $(".energy-gas-electricity.quarterly-1").waitForDisplayed();
    elem = $(".energy-gas-electricity.quarterly-1");
    elem.click();
    $("#Email").waitForDisplayed();
    elem = $("#Email");
    elem.setValue(email)
    if (!alreadyConfirmed) {
        $(".checkbox-confirm").waitForDisplayed();
        $(".checkbox-confirm").click();
    }
    $("#email-submit").waitForDisplayed();
    $("#email-submit").click();
    browser.waitUntil(() => {
        return $(".tariffs-for-me-banner-heading").getText() === 'Summary'
    }, 5000, 'Summary');
}