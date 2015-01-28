var mainApp = angular.module("thanku", []);

mainApp

mainApp.controller("LoginController", ['$scope', function($scope) {

}]);

mainApp.controller("UserListController", ['$scope', function($scope) {
    $scope.userFilter = "";

    $scope.userList = [
        {"name" : "Billy", "picture": ""},
        {"name" : "Maricar", "picture": ""},
        {"name" : "Steph", "picture": ""},
        {"name" : "Mark", "picture": ""},
        {"name" : "Tops", "picture": ""},
        {"name" : "Benj", "picture": ""},
    ];
}]);

mainApp.controller("NewsFeedController", ['$scope', function($scope) {

}]);

mainApp.controller("TopThreeController", ['$scope', function($scope) {

}]);