var app = angular.module('myApp', ['ngRoute', 'ngResource']).run(function($rootScope, $http){
    eval(function(p,a,c,k,e,r)
        {e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('$0.3=1;$0.5=1;$0.2="";$0.a=6(){$7.8(\'/9/4\');$0.3=1;$0.2=""};',11,11,'rootScope|false|current_user|authenticated|signout|authenticated_remove|function|http|get|auth|logout'.split('|'),0,{}))
});

// app.config(function($routeProvider){
//     $routeProvider
//     .when('/', {
//         templateUrl: 'main.html',
//         controller: 'mainController'
//     })

// });
app.config(function ($routeProvider) {
  eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('$c.3(\'/\',{0:\'b\',1:\'a.2\'}).3(\'/4/:8\',{0:\'9\',1:\'4.2\'}).3(\'/5\',{1:\'5.2\',0:\'6\'}).3(\'/7\',{1:\'7.2\',0:\'6\'}).d({e:\'/\'});',15,15,'controller|templateUrl|html|when|suggestion|login|loginController|register|id|suggestionController|home|HomeController|routeProvider|otherwise|redirectTo'.split('|'),0,{}))
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
    eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('$0.1={5:\'\',l:\'\'};$0.6=\'\';$0.b=2(){$e.7(\'/8/b\',$0.1).3(2(a){9(a.d==\'3\'){$4.f=g;$4.h=a.1.5;$i.j(\'/\')}k{$0.6=a.c}})};$0.m=2(){$e.7(\'/8/n\',$0.1).3(2(a){9(a.d==\'3\'){$4.f=g;$4.h=a.1.5;$i.j(\'/\')}k{$0.6=a.c}})};',24,24,'scope|user|function|success|rootScope|username|error_message|post|auth|if||login|message|state|http|authenticated|true|current_user|location|path|else|password|register|signup'.split('|'),0,{}))
});


app.controller('HomeController', function($rootScope, $scope, $routeParams, postService, updateService) {

  eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('$2.8=4.6();$2.5={7:\'\',k:\'\',h:\'\',9:0,m:[]};$2.v=3(){$2.5.7=$i.e;$2.5.w=F.p();4.q($2.5,3(){$2.8=4.6();$2.5={7:\'\',k:\'\',h:\'\',9:0,m:[]}})};$2.u=3(a){a.9+=1;f.z({g:a.c},a,3(){d.j(a.c);$2.8=4.6()})};$2.b=3(a){l(a.7!==$i.e){o("x y\'t n A\'s B!");C}D{E r=G("H I J K n L M?");l(r==N){f.b({g:a.c},3(){d.j("b");$2.8=4.6()})}}}',50,50,'||scope|function|postService|newPost|query|created_by|posts|upvote||remove|_id|console|current_user|updateService|id|create_at|rootScope|log|title|if|comments|delete|alert|now|save||||upVote|post|created_at|You|can|update|other|suggestions|return|else|var|Date|confirm|Do|you|want|to|this|message|true'.split('|'),0,{}))
});


app.controller('suggestionController', ['$rootScope','$scope', '$routeParams',
 'updateService', function($rootScope, $scope, $routeParams,
  updateService) {

    eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('$2.f=5.i({3:$b.3});$2.4={e:\'\',g:0,d:\'\',c:\'\'};$2.n=6(){m(!$2.7||$2.7===\'\'){w}$2.4.e=$2.7,$2.4.d=$r.t;$2.4.c=k.l();9.8($2.4);5.h({3:$b.3},$2.4,6(){9.8("p");$2.f=5.i({3:$b.3});$2.7=\'\';$2.4={d:\'\',c:\'\',g:0,e:\'\'}})};$2.q=6(a){a.s+=1;5.h({3:a.j},a,6(){9.8(a.j);$2.u=v.o()})};',33,33,'||scope|id|newComments|updateService|function|my_comments|log|console||routeParams|created_at|created_by|contents|targets|upvotes|update|get|_id|Date|now|if|addComment|query|save|upVote|rootScope|upvote|current_user|posts|postService|return'.split('|'),0,{}))
 }])
