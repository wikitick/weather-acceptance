
require('nightwatch-cucumber')({
    cucumberArgs: [
        '--require', 'timeout.js',
        '--require', 'features/step_definitions',
        '--require', 'hooks.js',
        '--format', 'pretty',
        '--format', 'json:reports/cucumber.json',
        'features'
    ]
});

module.exports = {
    output_folder: 'reports',
    page_objects_path: 'pages',
    live_output: false,
    disable_colors: false,
    selenium: {
        start_process: true,
        server_path: './bin/selenium-server-standalone-3.0.1.jar',
        log_path: '',
        host: '127.0.0.1',
        port: 4444,
        cli_args: {
            'webdriver.chrome.driver':'./bin/chromedriver',
            'webdriver.gecko.driver' : './bin/geckodriver'
        }
    },
    test_settings: {
        default: {
            launch_url: 'http://localhost:3000',
            selenium_port: 4444,
            selenium_host: 'localhost',
            screenshots : {
                enabled : true,
                on_failure : true,
                path: 'screenshots/default'
            },
            desiredCapabilities: {
                javascriptEnabled: true,
                browserName: 'firefox',
                marionette: true,
                acceptSslCerts: true
            }
        },
        chrome: {
            desiredCapabilities: {
                browserName: "chrome"
            }
        }
    }
};



