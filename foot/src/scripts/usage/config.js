/**
 * Created by 大瑞 on 2017/2/10.
 */

function config($stateProvider,$urlRouterProvider){
    //设置默认页面
    $urlRouterProvider.otherwise('/index')
    $stateProvider
        //引导页
        .state('index',{
            url:'/index',
            templateUrl:'views/index.html',
            controller:'indexCtrl'
        })
        //内容页面
        .state('home',{
            url:'/home',
            templateUrl:'views/home.html',
            controller:'homeCtrl'
        })
        //内容页面默认的首页
        .state('home.idx',{
            url:'/idx',
            templateUrl:'views/idx.html',
            controller:'idxCtrl'
        })
        //首页默认的热点页面
        .state('home.idx.hot',{
            url:'/hot',
            templateUrl:'views/hot.html',
            controller:'hotCtrl'
        })
        //首页关注页面
        .state('home.idx.care',{
            url:'/care',
            templateUrl:'views/care.html'
        })
        //内容页面的搜索页面
        .state('home.search',{
            url:'/search',
            templateUrl:'views/search.html'
        })
        //内容页面的图片搜索页
        .state('home.cammer',{
            url:'/cammer',
            templateUrl:'views/cammer.html'
        })
        //内容页面的用户信息页
        .state('home.user',{
            url:'/user',
            templateUrl:'views/user.html'
        })
        //内容页面的返回退出页面页
        .state('home.back',{
            url:'/back',
            templateUrl:'views/back.html'
        })
}
angular.module('myApp')
    .config(config);