/**
 * Created by Zana on 6/24/2016.
 */


(function() {

    var app = angular.module('app', []);

    app.controller('SendController', ['$rootScope', '$scope', '$http', '$sce',
        function( $rootScope, $scope, $http, $sce){
        
        $scope.message = {
            name: "",
            email: "",
            sender: "",
            text: ""
        };

        $scope.notification = $sce.trustAsHtml("<div class=\"bac-email-notification\">We’d <span>love</span> to hear from you. </div>");
        
        $scope.sendEmail= function() { 
            var req = {
                method: 'POST',
                url: '/email.php',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: $scope.message
            };
            $http(req).then(function() {
                $scope.notification = $sce.trustAsHtml("Thank you. We'll get back to you shortly.");
                $scope.message = {
                    name: "",
                    email: "",
                    sender: "",
                    text: ""
                };
            }, function() {
                $scope.notification = $sce.trustAsHtml("Something went wrong. Please try again in a few minutes.");
            }); 
        };
        
        $scope.contact = function() {
            window.location.hash = "contact";
        }

    }]);



})();