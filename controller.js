(function(){

    'use strict';

    var unidescApp = angular.module("unidescApp");

    unidescApp.controller('produtoController', produtoController);

    produtoController.$inject = ['$scope'];

    function produtoController($scope) {

        var vm = this;
        vm.produto = {
            nome: "jaqueta",
            preco: 90
        };
        
    }
}());