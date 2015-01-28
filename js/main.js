var mainApp = angular.module("thanku", []);

mainApp

mainApp.controller("LoginController", ['$scope', function($scope) {

}]);

mainApp.controller("UserListController", ['$scope', function($scope) {
    $scope.userFilter = "";
    $scope.pointsGiven = 0;

    $scope.userList = [
        {"name" : "Billy", "picture": ""},
        {"name" : "Maricar", "picture": ""},
        {"name" : "Steph", "picture": ""},
        {"name" : "Mark", "picture": ""},
        {"name" : "Tops", "picture": ""},
        {"name" : "Benj", "picture": ""},
    ];


    $scope.vote = function(point) {
        $scope.pointsGiven = point;
    };
}]);

mainApp.controller("NewsFeedController", ['$scope', function($scope) {

}]);

mainApp.controller("TopThreeController", ['$scope', function($scope) {

}]);