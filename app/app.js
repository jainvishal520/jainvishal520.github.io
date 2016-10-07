var app = angular.module('angularTable', ['angularUtils.directives.dirPagination']);

app.controller('listdata',function($scope, $http){
	$scope.users = [];
	$http.get("json/companyData.json").success(function(response){ 
		$scope.users = response; 
	});
	
	$scope.sort = function(keyname){
		$scope.sortKey = keyname;
		$scope.reverse = !$scope.reverse; 
	}
});