var app = angular.module('myApp',['ionic']);
app.controller('mapCtrl',['$scope','$timeout','$ionicPopover',function($scope,$timeout,$ionicPopover){
	console.log("mapCtrl");
    //
    // var template = '<ion-popover-view><ion-header-bar> <h1 class="title">我的浮动框标题</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';
    // $scope.popover = $ionicPopover.fromTemplate(template, {
    //     scope: $scope,
    //     backdropClickToClose:false
    // });
    //
    $ionicPopover.fromTemplateUrl('popover.html', {
        scope: $scope,
        backdropClickToClose:false
    }).then(function(popover) {
        $scope.popover = popover;

    });
    // $scope.popover = $ionicPopover.fromTemplateUrl('popover.html', {
    //     scope: $scope
    // });

    $scope.openPopover = function($event) {
        $scope.popover.show($event);
    };
    $scope.closePopover = function() {
        $scope.popover.hide();
        console.log("closePopover")
    };
    // 清除浮动框
    $scope.$on('$destroy', function() {
        $scope.popover.remove();
        console.log("destory")
    });
    // 在隐藏浮动框后执行
    $scope.$on('popover.hidden', function() {
        console.log("hidden")
    });
    // 移除浮动框后执行
    $scope.$on('popover.removed', function() {
        // 执行代码
        console.log("removed")
    });


}]);