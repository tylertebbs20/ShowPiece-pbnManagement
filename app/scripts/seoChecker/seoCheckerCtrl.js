var app = angular.module('pbnTools');

app.controller('seoCheckerCtrl', function($scope, $http, seoCheckerService){
	$scope.htmlField = "";
	$scope.keywordField = "";
	$scope.metaField = "";
	$scope.titleField = "";
	$scope.urlField = "";
	$scope.getSeoAnalysis = function(html, keyword, meta, title, url) {
	    seoCheckerService.getSeoAnalysis($scope.htmlField, $scope.keywordField, $scope.metaField, $scope.urlField, $scope.urlField)
	    	.then(function(data) {
	    		console.log(data);
	    		arr = data.data.validation;
	    		console.log("DATA ARRAY IS", arr);

	    		$scope.titleKeywordCountMax = arr[0].data.max; 
	    		$scope.titleKeywordCountMin = arr[0].data.min;

	    		$scope.titleCharacterlength  = arr[1].data.length;
	    		$scope.titleCharacterMax  = arr[1].data.max;
	    		$scope.titleCharacterMin  = arr[1].data.min;

	    		$scope.articleImageCount = arr[2].data.imageCount;
	    		$scope.articleImageCountMin = arr[2].data.min;
	    		$scope.articleImageCountRecommendation = arr[2].msg;

	    		$scope.articleKeywordCount = arr[3].data.keywordCount;
	    		$scope.articleKeywordCountMaxSuggestion = arr[3].data.max;
	    		$scope.articleKeywordCountMinSuggestion = arr[3].data.min;
	    		$scope.articleKeywordDensityRecommendation = arr[3].msg;

	    		$scope.outboundLinks = arr[4].data.linkCount;
	    		$scope.outboundLinkMin = arr[4].data.min;
	    		$scope.outboundLinkRecommendation = arr[4].msg;

	    		$scope.wordCount = arr[5].data.wordCount;
	    		$scope.wordCountMin = arr[5].data.min;
	    		$scope.wordCountRecommendation = arr[5].msg;

	    		$scope.keywordLength = arr[6].data.wordCount;
	    		$scope.keywordLengthRecommendation = arr[6].msg;

	    		$scope.metaDescriptionKeywordCount = arr[7].data.keywordCount;
	    		$scope.metaDescriptionKeywordCountMax = arr[7].data.max;
	    		$scope.metaDescriptionKeywordCountMin = arr[7].data.min;
	    		$scope.metaDescriptionKeywordCountRecommendation = arr[7].msg;

	    		$scope.metaDescriptionCharacterlength = arr[8].data.length;
	    		$scope.metaDescriptionCharacterlengthRecommendation = arr[8].msg;

	    		$scope.urlKeywordCountMax = arr[9].data.max;
	    		$scope.urlKeywordCountMin = arr[9].data.min;


	    })
	};

});