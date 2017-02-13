
angular.module("myApp")
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise("/index");
        $stateProvider
            .state("index",{
                url: "/index",
                templateUrl: "./src/scripts/tpls/index.string",
                controller: "indexCtrl"
            })
            .state("home",{
                url: "/home",
                templateUrl: "./src/scripts/tpls/home.string",
                controller: "homeCtrl"
            })
            //内容页面默认的首页
            .state('home.idx',{
                url:'/idx',
                templateUrl:'./src/scripts/tpls/idx.string',
                controller:'idxCtrl'
            })
            //首页默认的热点页面
            .state('home.idx.hot',{
                url:'/hot',
                templateUrl:'./src/scripts/tpls/hot.string',
                controller:'hotCtrl'
            })
            //首页关注页面
            .state('home.idx.care',{
                url:'/care',
                templateUrl:'./src/scripts/tpls/care.string'
            })
            //内容页面的搜索页面
            .state('home.search',{
                url:'/search',
                templateUrl:'./src/scripts/tpls/search.string'
            })
            //内容页面的图片搜索页
            .state('home.cammer',{
                url:'/cammer',
                templateUrl:'./src/scripts/tpls/cammer.string'
            })
            //内容页面的用户信息页
            .state('home.user',{
                url:'/user',
                templateUrl:'./src/scripts/tpls/user.string'
            })
            //内容页面的返回退出页面页
            .state('home.back',{
                url:'/back',
                templateUrl:'./src/scripts/tpls/back.string'
            })
    })