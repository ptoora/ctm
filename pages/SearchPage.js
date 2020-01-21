export function getSearchResults(searchText) {
    $(".g .LC20lb").waitForDisplayed();
    const elems = $$(".g .LC20lb");
    var returnElems = [];
    elems.forEach((elm) => {
        returnElems.push(elm.getText());
    })
    return returnElems;
}