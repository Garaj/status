var app = angular.module("GarajApp", ['ngtimeago']);
app.controller('garajCtrl', function($scope, $http){
	$http.get("http://spaceapi.net/cache/Garaj")
		.success(function(response){
			$scope.liste = response;
			$scope.lastChangeDate = new Date(response.state.lastchange * 1000);
		});
})