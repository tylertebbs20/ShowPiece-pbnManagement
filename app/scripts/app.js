var app = angular.module('pbnTools', ["firebase", "ui.router"]);

app.constant('FBURL', 'https://pbn-management.firebaseio.com');

app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.when('', '/home');
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home',{
      url: '/home',
      templateUrl: 'scripts/home/home.html',
      controller: 'HomeCtrl'
    })
    .state('PbnManager', {
      url: '/pbnManager',
      templateUrl: 'scripts/pbnManager/PbnManager.html',
      controller: 'pbnManagerCtrl'
    })
    .state('secure.seochecker', {
      url: '/seochecker',
      templateUrl: 'scripts/seoChecker/seoChecker.html',
      controller: 'seoCheckerCtrl'
    })
    .state('Support', {
      url: '/support',
      templateUrl: 'scripts/customerSupport/support.html',
      controller: 'SupportCtrl'
    })
    .state('secure.sitemetrics', {
      url: '/sitemetrics',
      templateUrl: 'scripts/metricsResearch/siteMetrics.html',
      controller: 'siteMetricsCtrl'
    })
    .state('login',{
      url: '/login',
      templateUrl: 'scripts/login-register/login-logout/login.html',
      controller: 'LoginCtrl'
    })
    .state('logout', {
      url: '/logout',
      templateUrl: 'scripts/login-register/login-logout/logout.html',
      controller: 'LoginCtrl',
      resolve: {
        logout: function(authService){
          authService.logout();
        }
      }
    })
    .state('register', {
      url: '/register',
      templateUrl: 'scripts/login-register/registration/register.html',
      controller: 'RegisterCtrl'
    })
    .state('secure', {
      abstract: true,
      template: '<div ui-view>',
      controller: 'SecureCtrl',
      resolve: {
        isLoggedIn: function(authService){
          return authService.isLoggedIn();
        }
      }
    })
    .state('secure.dashboard', {
      url: '/dashboard',
      templateUrl: 'scripts/secure/dashboard.html',
      controller: 'DashboardCtrl'
    });
});
