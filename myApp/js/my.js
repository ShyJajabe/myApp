var app = angular.module('myApp',['ionic']);
app.controller('myCtrl',['$scope','$timeout',function($scope,$timeout){
	$scope.data = [
		{addr:"中华园派出所1",name:"创业路嵩山路1",num:001},
		{addr:"中华园派出所2",name:"创业路嵩山路2",num:002},
		{addr:"中华园派出所3",name:"创业路嵩山路3",num:003},
		{addr:"中华园派出所4",name:"创业路嵩山路4",num:004},
		{addr:"中华园派出所5",name:"创业路嵩山路5",num:005},
		{addr:"中华园派出所5",name:"创业路嵩山路5",num:005},
		{addr:"中华园派出所5",name:"创业路嵩山路5",num:005},
		{addr:"中华园派出所5",name:"创业路嵩山路5",num:005},
		{addr:"中华园派出所5",name:"创业路嵩山路5",num:005},
		{addr:"中华园派出所5",name:"创业路嵩山路5",num:005},
	];
	$scope.hasMore = true;
	$scope.$count = 3;
	$scope.loadMore = function(){
		$timeout(function(){
			if($scope.$count > $scope.data.length){
        $scope.$broadcast('scroll.infiniteScrollComplete');
        return;
			}
			$scope.$count += 3;
			$scope.$broadcast('scroll.infiniteScrollComplete');
			console.log($scope.$count)
			if($scope.$count >= $scope.data.length){
				$scope.hasMore = false;
			}
		},1500)
	}
}])