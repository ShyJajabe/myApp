var pListApp = angular.module('pListApp',['ionic']);
pListApp.controller('pListCtrl',['$scope','$timeout',function($scope,$timeout){
	$scope.projects = [
	  {num:'012345',pName:'周市派出所1'},{num:'012345',pName:'周市派出所2'},
	  {num:'012345',pName:'周市派出所3'},
	  {num:'012345',pName:'周市派出所4'},
	  {num:'012345',pName:'周市派出所5'},
	  {num:'012345',pName:'周市派出所6'},{num:'012345',pName:'周市派出所4'}
	];
}]);
//配置
pListApp.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
	$ionicConfigProvider.platform.android.navBar.alignTitle('center');
});

