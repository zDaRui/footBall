/**
 * Created by 大瑞 on 2017/2/10.
 */
function indexCtrl($scope, $http, $log, $rootScope) {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        }
    })
}
function homeCtrl($state) {
    $state.go('home.idx')
}
function idxCtrl($http, $scope, $state) {
    $state.go('home.idx.hot');
    $http({
        url: "../mork/data1.json"
    })
        .success(function (data) {
            console.log(data);
            $scope.scene = data.scene;
            $scope.life = data.life;
            $scope.Beauty = data.Beauty;
            console.log($scope.life)
        });
}
function hotCtrl($timeout) {
    //swiper滑动 tab切换
    var swi = new Swiper('.swiper-container', {
        onSlideChangeStart: function (swiper) {
            var idx = swiper.activeIndex;
            $('.nav').children().eq(idx).addClass('bg').siblings().removeClass('bg')
        }
    });
    //导航li的样式也相对改变样式
    $('.nav li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        swi.slideTo($(this).index())
    })
  /*  $timeout(function(){
        new IScroll('.swiper-slide')
    },10)*/
}

angular.module('myApp')
    .controller('indexCtrl', indexCtrl)
    .controller('homeCtrl', homeCtrl)
    .controller('idxCtrl', idxCtrl)
    .controller('hotCtrl', hotCtrl)
