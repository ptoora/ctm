export function getCountOfResults() {
    $(".loading-prices-animation").waitForDisplayed();
    return $$(".loading-prices-animation").length;
}