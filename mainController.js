  angular.module('app', [])
  .controller('MainController', ['$scope', '$location', '$anchorScroll', MainController ]);

  function MainController($scope, $location, $anchorScroll){
    var vm = this;
    vm.scrollAbout = scrollAbout;
    vm.scrollProjects = scrollProjects;
    vm.scrollResume = scrollResume;
    function scrollAbout(){
      $location.hash('aboutScrollSection');
      $anchorScroll();
    }
    function scrollProjects(){
      $location.hash('projectScrollSection');
      $anchorScroll();
    }
    function scrollResume(){
      $location.hash('resumeScrollSection');
      $anchorScroll();
    }
  }
