const test = require('../pageobjects/test');
//const Page = require('../pageobjects/page');


describe('test for online shop', () => {
    it('the user should buy some items from online shop', async () => {
      await  browser.url("https://joshwoodcolour.com/")
      browser.pause(3000)
      await test.popupDiscountCloseBtn.click();
      await  test.allItems.click();
      const elem = await $('div.products-list-grid-container > ul > li:nth-child(1)');
      await elem.scrollIntoView();
      browser.elementHover(elem)
      await test.customiseBtn.click();
      await test.color.click();
      await test.tone.click();
      await test.deliveryBtn.isClickable();
      await test.deliveryBtn.click();
      await test.addBagBtn.click();
      await (test.elementCount).isEqual(1);
      await test.closeBtn.click()
      await test.bagBtn.click();
      await expect (test.cartItem).toHaveTextContaining('he Miracle System - Permanent Colour 4.0 + Chocolate')
      await test.removeBtn.click();
      await expect (test.emptyCart).toHaveTextContaining('Your cart is currently empty.')
      await test.continueShoppingBtn.click();
      await test.randomItem.click();
       $$('div.cart-item__info > div > span')[1].click();
      await test.checkoutBtn.click();
      await test.skipPopup.click();
      await (test.emailField).setValue('javab78726@lankew.com')
      const country = ['Isle of Man','Guernsey','Jersey']
      const randomCountry = country[Math.floor(Math.random()*country.length)]
      await (test.countryDropdown).selectByVisibleText(randomCountry)
      await(test.firstNameField).setValue("Test");
      await (test.lastNameField).setValue('Test1');
      await (test.addressField).setValue('');
      await(test.cityField).setValue('invalidCity');
      await (test.postcodeField).setValue('1234');
      await test.shippingBtn.click();
      await expect (test.addressFieldWrapper).toHaveAttributeContaining('class','field--error')
      await expect(test.postCodeWrapper).toHaveAttributeContaining('class',"field--error")
      await expect(test.errorMssgAddrs).toHaveText('Enter an address');
      await expect(test.errorMssgPost).toHaveText('Enter a valid postal code for ' + randomCountry);

    




    });
});


