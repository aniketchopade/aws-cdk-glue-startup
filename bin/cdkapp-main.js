#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { CdkappMainStack } = require('../lib/cdkapp-main-stack');

const app = new cdk.App();
new CdkappMainStack(app, 'CdkappMainStack');
