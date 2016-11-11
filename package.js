Package.describe({
    name         : 'slaivyn:accounts-phone',
    version      : '0.0.22',
    summary      : 'A login service based on mobile phone number, For Meteor.',
    git          : 'https://github.com/slaivyn/accounts-phone',
    documentation: 'README.md'
});

Npm.depends({
    "phone"         : "1.0.3",
    "twilio"        : "1.10.0",
    "stream-buffers": "0.2.5"
});

Package.onUse(function (api) {
    api.versionsFrom('1.4.1.3')

    api.use('ecmascript')
    api.use('accounts-base', ['client', 'server']);
    // Export Accounts (etc) to packages using this one.
    api.imply('accounts-base', ['client', 'server']);
    api.use('npm-bcrypt', 'server');
    api.use('srp', ['client', 'server']);
    api.use('sha', ['client', 'server']);
    api.use('email', ['server']);
    api.use('random', ['server']);
    api.use('ejson', 'server');
    api.use('callback-hook', 'server');
    api.use('check');
    api.use('underscore');
    api.use('ddp', ['client', 'server']);
    api.addFiles('sms_server.js', 'server');
    api.addFiles('phone_server.js', 'server');
    api.addFiles('phone_client.js', 'client');

    api.export('SMS', 'server');
    api.export('SMSTest', 'server', {testOnly: true});
});

Package.onTest(function (api) {
    api.use(['slaivyn:accounts-phone', 'tinytest', 'test-helpers', 'tracker',
        'accounts-base', 'random', 'underscore', 'check',
        'ddp']);
    api.addFiles('phone_tests_setup.js', 'server');
    api.addFiles('phone_tests.js', ['client', 'server']);
    api.addFiles('sms_tests_setup.js', 'server');
    api.addFiles('sms_tests.js', 'client');
});
