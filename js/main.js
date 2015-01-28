var mainApp = angular.module("thanku", [])
    .config(function($locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
});

mainApp

mainApp.controller("LoginController", ['$scope', function($scope, $location) {
    $scope.$location = {};
    $scope.init = function(){
        $scope.usernameError = null;
        $scope.passwordError = null;
    };

    $scope.login = function(){
        if($scope.username != null && $scope.password != null)
        {
            $location.call('/dashboard.html');
        }

        $scope.username == null ? $scope.usernameError = "Username is required." : $scope.usernameError = null;
        $scope.password == null ? $scope.passwordError = "Password is required." : $scope.passwordError = null;
    };
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

mainApp.controller("NewsFeedController", ['$scope', '$http', function($scope, $http) {

    var baseUrl = "http://13d6f749.ngrok.com";

    $scope.init = function() {
        $scope.getNewsFeed();
    };

    $scope.getNewsFeed = function() {

        var promise = $http({
            method: "GET",
            async: true,
            url: baseUrl + "/api/v1.0/credits?time="+ Date.now().toString()
        });

        promise.success( function(data) {
            $scope.newsFeed = data.credits;
        }).error( function(data) {
            toastr.error(data);
        });
    };

    $scope.getMomentTime = function(timestamp) {
        return (moment(timestamp).fromNow());
    };

    setInterval(function(){ $scope.getNewsFeed(); }, 3000);
}]);

mainApp.controller("TopThreeController", ['$scope', function($scope) {

}]);