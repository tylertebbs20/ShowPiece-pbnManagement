var app = angular.module('pbnTools');

app.service('seoCheckerService', function($http, $q){
    
    this.getSeoAnalysis = function(html, keyword, meta, title, url){
        console.log('getSeoAnalysis service hit');
        var dfd = $q.defer(); 
        $http({
            url: "https://seo.p.mashape.com/api?html="+html+'&keyword='+keyword+'&meta_description='+meta+'&title='+title+'&url='+url+'/',
            method: 'GET',
            headers: {
                "X-Mashape-Authorization":"4A2ugeu8x4mshWQtWSdBFzhb32i7p1sJQVWjsnrczIMO3RKgCM"
            }
        }).then(function(res){
            dfd.resolve(res); 
        }, function(err){
            if(err) return err; 
        }); 
        return dfd.promise; 
    }
});