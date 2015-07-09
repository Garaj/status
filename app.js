var app = angular.module("GarajApp", []);
app.controller('garajCtrl', function($scope, $http){
	$http.get("http://spaceapi.net/cache/Garaj")
		.success(function(response){
			$scope.liste = response;
		});
})