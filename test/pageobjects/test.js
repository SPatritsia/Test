const Page = require('./page')
class test extends Page {

get allItems(){
    return $(' nav > ul > div:nth-child(3) > li > div > a > span')
}
get customiseBtn(){
    return $('div.products-list-grid-container > ul > li:nth-child(1) > div > a')
}
get color(){
    return $('div.pdp-selection-level-row__img.pdp-selection-level-row__img--active')
}
get tone(){
    return $(' div.pdp-selection > div > div:nth-child(2) > div.pdp-selection-level__flex > div > div:nth-child(3)')
}
get deliveryBtn(){
    return $('div.product-miracle-select__value-container.product-miracle-select__value-container--has-value.css-1hwfws3')
}
get deliveryEvery3(){
    return $('#react-select-5-option-1')
}
get addBagBtn(){
    return $('div.pdp-selection > div > div.flex.align-items > div > button')

}
get closeBtn(){
    return $ (' div.cart.cart--open.false > div > div.cart-header > button')
}







} module.exports = new test();