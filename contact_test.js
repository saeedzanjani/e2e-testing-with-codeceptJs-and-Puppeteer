Feature('contact page');

Scenario('test contact page', ({ I }) => {
    I.amOnPage('/contact/');
    I.fillField('#g7-name', 'saeed');
    I.seeAttributesOnElements('#g7-name', { required: true});
    I.fillField('#g7-email', 'saeed@gmail.com');
    I.seeAttributesOnElements('#g7-email', { required: true});
    I.fillField('#g7-website', 'www.saeed.com');
    I.seeAttributesOnElements('#g7-website', { type: 'url'});
    I.fillField('#g7-date', 'April 14, 2022');
    I.seeAttributesOnElements('#g7-date', { required: true});
    I.click('Submit')
  });
  
