var mainApp = angular.module("thanku", []);

mainApp

mainApp.controller("LoginController", ['$scope', '$location', function($scope, $location) {
    $scope.$location = {};
    $scope.init = function(){
        $scope.usernameError = null;
        $scope.passwordError = null;
    };

    $scope.login = function(){
        $scope.username == null ? $scope.usernameError = "Username is required." : $scope.usernameError = null;
        $scope.password == null ? $scope.passwordError = "Password is required." : $scope.passwordError = null;

        if($scope.username != null && $scope.password != null)
        {
            toastr.success("Successfully Logged in.");
            window.location.href = "dashboard.html";
        }
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
    $scope.currentNumberOfNewsFeed = 0;

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
            if($scope.currentNumberOfNewsFeed != data.credits.length && $scope.currentNumberOfNewsFeed != 0)
            {
                toastr.success("Someone gave a thanks! Check it out!");
            }
        }).error( function(data) {
            toastr.error(data);
        });
        $scope.currentNumberOfNewsFeed = $scope.newsFeed.length;
    };

    $scope.getMomentTime = function(timestamp) {
        return (moment(timestamp).fromNow());
    };

    setInterval(function(){ $scope.getNewsFeed(); }, 3000);
}]);

mainApp.controller("TopThreeController", ['$scope', function($scope) {

}]);