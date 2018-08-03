var app = angular.module('mcgill-ai', ['ngRoute'])

app.controller('mainController', function($scope, $http) {

    $scope.loading = true;
    $scope.emailFormData = {};
    $scope.email_success_message = ''
    $scope.result = ''

    $scope.sendEmail = function() {
        if (!$scope.emailFormData.email || !$scope.emailFormData.name || !$scope.emailFormData.message) {
            $scope.email_success_message = 'It looks like you have some missing fields. Please fill out all fields on the form.'
        } else {
            $http.post('/email', $scope.emailFormData).success(function(result) {
                $scope.emailFormData = {}
                if (result.success) {
                    $scope.email_success_message = 'Your email was successfully sent!'
                } else {
                    $scope.email_success_message = 'Seems like our server is not working correctly. Please contact us through Facebook.'
                }
            })
        }
    }

});

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: "implementai.html"
    })
});