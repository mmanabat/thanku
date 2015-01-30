var mainApp = angular.module("thanku", []);

mainApp.controller("LoginController", ['$scope', '$rootScope', '$location', function($scope, $rootScope,$location) {
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
            $rootScope.username = $scope.username;
            window.location.href = "dashboard.html";
        }
    };
}]);

mainApp.controller("UserListController", ['$scope','$rootScope', '$http', function($scope, $rootScope, $http) {
    $scope.userFilter = "";
    $scope.pointsGiven = 0;

    var baseUrl = "http://13d6f749.ngrok.com";

    $scope.init = function(){
        $scope.getUserList();
    };

    $scope.getUserList = function() {
        var promise = $http({
            method: "GET",
            async: true,
            url: baseUrl + "/api/v1.0/users"
        });

        promise.success( function(data) {
            $scope.userList = data.users;
        }).error( function(data) {
            toastr.error(data);
        });
    };

    $scope.username = $rootScope.username;


    $scope.getUserList();

    $scope.vote = function(user, point) {
        $scope.recipient = user;
        $scope.pointsGiven = point;
        $scope.message = "";
    };

    $scope.submitVote = function() {
        console.log($scope.recipient);
        $.ajax({
            type: "POST",
            url: baseUrl + "/api/v1.0/thank/1/recipient/"+ $scope.recipient.id,
            dataType: "json",
            data: {
                point: $scope.pointsGiven,
                description: $scope.message
            },
            success: function(data) {
                toastr.success("You have successfully gave " +$scope.pointsGiven+" thank(s) to "+$scope.recipient.first_name+" "+$scope.recipient.last_name);
            },
            error: function(data) {
                toastr.error("Failed to give thanks<br/>Error:"+data);
            }
        });
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
            $scope.currentNumberOfNewsFeed = $scope.newsFeed.length;
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