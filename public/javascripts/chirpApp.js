var app = angular.module('myApp', ['ngRoute', 'ngResource']).run(function($rootScope, $http){
    $rootScope.authenticated = false;
    $rootScope.authenticated_remove = false;
    $rootScope.current_user = "";

    $rootScope.logout = function(){
        $http.get('/auth/signout');

        $rootScope.authenticated = false;
        $rootScope.current_user = "";
    };
});

// app.config(function($routeProvider){
//     $routeProvider
//     .when('/', {
//         templateUrl: 'main.html',
//         controller: 'mainController'
//     })

// });
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'home.html'
    })
    .when('/suggestion/:id', {
        controller: 'suggestionController',
        templateUrl: 'suggestion.html'
    })
    .when('/login', {
        templateUrl: 'login.html',
        controller: 'loginController'
    })
    .when('/register', {
        templateUrl: 'register.html',
        controller: 'loginController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.factory('postService', function($resource){
    return $resource('/api/posts');
});

app.factory('updateService', function($resource){
      return $resource('/api/posts/:id', null, {
            'update': { method:'PUT' }
      });
});

app.controller('loginController', function($scope, $rootScope, $http, $location){
    $scope.user = {username: '', password: ''};
    $scope.error_message = '';

    $scope.login = function(){
       $http.post('/auth/login', $scope.user).success(function(data){
        if(data.state == 'success'){
            $rootScope.authenticated = true;
            $rootScope.current_user = data.user.username;

            $location.path('/');
        }else {
            $scope.error_message = data.message;
        }

       });
    };

    $scope.register = function(){
        $http.post('/auth/signup', $scope.user).success(function(data){
            if(data.state == 'success'){
                $rootScope.authenticated = true;
                $rootScope.current_user = data.user.username;
                $location.path('/');
            }
            else {
                $scope.error_message = data.message;
            }

        });
    };
});


app.controller('HomeController', function($rootScope, $scope, $routeParams, postService, updateService) {

    $scope.posts = postService.query();
    $scope.newPost = {created_by:'', title:'', create_at:'', upvote: 0, comments: []};

    $scope.post = function(){
        $scope.newPost.created_by = $rootScope.current_user;
        $scope.newPost.created_at = Date.now();
        postService.save($scope.newPost, function(){
             $scope.posts = postService.query();
             $scope.newPost = {created_by:'', title:'', create_at:'', upvote: 0, comments: []};
        });
    };

    $scope.upVote = function(post){
        post.upvote += 1;

        updateService.update({id: post._id}, post, function(){
            console.log(post._id);
             $scope.posts = postService.query();
        });
    };

    $scope.remove = function(post){
        if(post.created_by !== $rootScope.current_user){
            alert("You can't delete other's suggestions!");
            return;
        }else{
            var r = confirm("Do you want to delete this message?");
            if(r == true) {
                updateService.remove({id: post._id}, function(){
                console.log("remove");
                $scope.posts = postService.query();
            });
            }
        }
    }
});


app.controller('suggestionController', ['$rootScope','$scope', '$routeParams',
 'updateService', function($rootScope, $scope, $routeParams,
  updateService) {

    $scope.targets =updateService.get({id : $routeParams.id});
    $scope.newComments = {contents:'', upvotes: 0, created_by: '', created_at: ''};
    $scope.addComment = function(){
        if(!$scope.my_comments || $scope.my_comments === '' ){
            return;
        }

            $scope.newComments.contents = $scope.my_comments,
            $scope.newComments.created_by = $rootScope.current_user;
            $scope.newComments.created_at = Date.now();
            console.log($scope.newComments);

            updateService.update({id: $routeParams.id}, $scope.newComments, function(){
                console.log("save");
                 $scope.targets = updateService.get({id : $routeParams.id});
                 $scope.my_comments = '';
                 $scope.newComments = {created_by:'', created_at:'', upvotes: 0, contents:''};
            });
    };
    $scope.upVote = function(post){
        post.upvote += 1;

        updateService.update({id: post._id}, post, function(){
            console.log(post._id);
             $scope.posts = postService.query();
        });
    };
 }])
