const Page = require('./page')
class test extends Page {

get allItems(){
    return $(' nav > ul > div:nth-child(3) > li > div > a > span')
}
get popupDiscountCloseBtn(){
    return $('.klaviyo-close-form')
}
get elementBlock(){
    return('div.products-list-grid-container > ul > li:nth-child(1)')
}
get customiseBtn(){
    return $('div.products-list-grid-container > ul > li:nth-child(1) > div > a')
}
get color(){
    return $(' div.pdp-selection-level__flex > div.pdp-selection-level__row.pdp-selection-level-row > div:nth-child(3)')
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
get elementCount(){
    return $('div.cart-header > span.cart-header__count')
}
get bagBtn(){
    return $('div.header__container > div:nth-child(3) > button')
}
get cartItem(){
    return $ ('div.cart-items > ul > div > div > div.cart-item__header > p')
}
get removeBtn(){
    return $('div.cart.cart--open.false > div > div.cart-items > ul > div > div > button')
}
get emptyCart(){
    return $ ('div.cart.cart--open.cart--error > div > div.cart-empty > p')
}
get continueShoppingBtn(){
    return $ ('div.cart.cart--open.cart--error > div > div.cart-empty > button')
}
get randomItem(){
    return $ ('div.pdp-pair-with > div > ul > li:nth-child(2) > div > button')
}
get checkoutBtn(){
    return $('div.cart-footer > div.cart-footer__buttons > button.cart-footer__checkout.cart__submit')
}
get skipPopup(){
    return $('div.modal-upsell__footer.modal-upsell-footer > button')
}
get emailField(){
    return $('#checkout_email')
}
get firstNameField(){
    return $('#checkout_shipping_address_first_name')
}
get lastNameField(){
    return $('#checkout_shipping_address_last_name')
}
get addressField(){
    return $('#checkout_shipping_address_address1')
}
get cityField(){
    return $('#checkout_shipping_address_city')
}
get postcodeField(){
    return $('#checkout_shipping_address_zip')
}
get countryDropdown(){
    return $('#checkout_shipping_address_country')

}
get shippingBtn(){
    return $('#continue_button')
}
get errorMssgPost(){
    return $('#error-for-zip')
}
get errorMssgAddrs(){
    return $('#error-for-address1')
}
get addressFieldWrapper(){
    return $('div[data-address-field="address1"]');
}
get postCodeWrapper(){
    return $('div[data-address-field="zip"]')
}


} module.exports = new test();