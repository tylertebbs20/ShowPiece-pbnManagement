var app = angular.module('pbnTools');

app.controller('SecureCtrl', function($scope, $state, isLoggedIn){
  !isLoggedIn && $state.go('login');
});

