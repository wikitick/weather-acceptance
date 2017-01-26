These feature tests have been created using the javascript based nightwatch-cucumber module.

This enables a BDD-style approach for cross-browser testing:

* Describe user stories in Cucumber using Gherkin syntax
* Map them to browser operations and assertions in Nightwatch.js
* Run using either real browser, headless browser or cloud based WebDriver services such as SauceLabs or BrowserStack

Further details are available here (https://github.com/mucsi96/nightwatch-cucumber)


####Installation details

`$ npm install`

A copy of the Selenium server standalone along with a chromedriver and geckodriver are installed in the bin directory,
the nightwatch.conf.js has been configured to point to this location.

####Further information

nightwatch server setup (http://nightwatchjs.org/getingstarted#selenium-server-setup)

nightwatch browser setup (http://nightwatchjs.org/getingstarted#browser-drivers-setup)


####Running tests

Start the Weather Forecast app as specified in the acceptance-testing README

`$ npm run develop` this will launch the app on localhost:3000.


The Features are set to run using firefox as the default browser targeting localhost:3000.


You can then run the tests by executing

`$ node_modules/.bin/nightwatch`

or simply

`$ nightwatch` if installed globally.


Features can be run separately using the tag option

`$ nightwatch --tag 5Day`

The Browser can be switched to Chrome by specifying the env option

`$ nightwatch --tag 5Day --env chrome`
