Package.describe({
  name: 'garrilla:geotools2',
  summary: 'GeoTools javascript coordinate transformations wrapped for Meteor.',
  version: '1.0.1',
  git: 'https://github.com/garrilla/garrilla-geotools2.git'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.4');
  api.addFiles([
    'garrilla:geotools2.js'
  ],'client');
  api.export([
    'GT_OSGB','GT_Irish','GT_WGS84'
    ],'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('garrilla:geotools2');
  api.addFiles('garrilla:geotools2-tests.js');
});

