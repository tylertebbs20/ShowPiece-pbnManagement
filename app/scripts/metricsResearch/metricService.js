var app = angular.module('pbnTools');

app.service('metricService', function($http, $q){
	
	this.getMetrics = function(url){
        console.log(url)
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/sitemetrics?url=' + url,
        }).then(function(response) {
            deferred.resolve(response.data)
        });
        return deferred.promise;
	}
});
