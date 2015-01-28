var mainApp = angular.module("thanku", []);

mainApp.controller("loginController", function ($scope) {
    $scope.username = "Username";
    $scope.password = "Password";

    $scope.login = function () {
        alert($scope.username + $scope.password);
    }
});