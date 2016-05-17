// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'LocalStorageModule'])

.run(function($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function() {
        cordova.getAppVersion.getVersionNumber().then(function (version) {
            $rootScope.APPLICATION_VERSION = version;
        });
    });
})

.config(function($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
    $stateProvider
    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })
    .state('app.networks', {
        url: '/networks',
        views: {
            'menuContent': {
                templateUrl: 'templates/networks.html',
                controller: 'NetworksCtrl'
            }
        }
    })
    .state('app.about', {
        url: '/about',
        views: {
            'menuContent': {
                templateUrl: 'templates/about.html',
                controller: 'AboutCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/networks');

    localStorageServiceProvider.setPrefix('wifiscanning');


})

.constant('API', {
  url: 'http://capstone.cloudapp.net/ingestion/'
});