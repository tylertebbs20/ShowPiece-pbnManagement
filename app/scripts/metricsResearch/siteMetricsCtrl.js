var app = angular.module('pbnTools');

app.controller('siteMetricsCtrl', function($scope, metricService, authService){
	$scope.urlField = "";
	//$scope.disableButton = $scope.urlField.length === 0;
	$scope.user = authService.cachedUser;

	$scope.getMetrics = function(url) {
	    metricService.getMetrics(url).then(function(data) {
	    	console.log(data);
	      $scope.metrics = data;
	      for (var key in $scope.metrics){
	      	if(typeof($scope.metrics[key]) === 'number') {
	      		$scope.metrics[key] = Math.round($scope.metrics[key]);
	      	}
	      }
	      console.log($scope.metrics);
	    })
	}

})