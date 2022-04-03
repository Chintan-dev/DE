
var login = angular.module('login', []);

login.controller('controller', ($scope) => {
        $scope.food = 'none';
        $scope.name = 'Chintan patel';
        $scope.your_number = '9723280340';
        $scope.login = () => {
                $scope.form = 'form_singn_up';
        }
        $scope.singn_up = () => {
                $scope.form = 'form_login';
        }

        $scope.btn1 = () => {
                $scope.title = 'food Donation Form';
                $scope.food = 'form_Donete_food';
        }

        $scope.btn2 = () => {
                $scope.title = 'Request to get food';
                $scope.food = 'form_Request_food';
        }
});
