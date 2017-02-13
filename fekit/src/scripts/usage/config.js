
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
            //����ҳ��Ĭ�ϵ���ҳ
            .state('home.idx',{
                url:'/idx',
                templateUrl:'./src/scripts/tpls/idx.string',
                controller:'idxCtrl'
            })
            //��ҳĬ�ϵ��ȵ�ҳ��
            .state('home.idx.hot',{
                url:'/hot',
                templateUrl:'./src/scripts/tpls/hot.string',
                controller:'hotCtrl'
            })
            //��ҳ��עҳ��
            .state('home.idx.care',{
                url:'/care',
                templateUrl:'./src/scripts/tpls/care.string'
            })
            //����ҳ�������ҳ��
            .state('home.search',{
                url:'/search',
                templateUrl:'./src/scripts/tpls/search.string'
            })
            //����ҳ���ͼƬ����ҳ
            .state('home.cammer',{
                url:'/cammer',
                templateUrl:'./src/scripts/tpls/cammer.string'
            })
            //����ҳ����û���Ϣҳ
            .state('home.user',{
                url:'/user',
                templateUrl:'./src/scripts/tpls/user.string'
            })
            //����ҳ��ķ����˳�ҳ��ҳ
            .state('home.back',{
                url:'/back',
                templateUrl:'./src/scripts/tpls/back.string'
            })
    })