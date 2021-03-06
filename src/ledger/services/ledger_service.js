(function () {
  'use strict';

  angular.module('blab')
    .service('Ledgers', Ledgers);

  function Ledgers($http, REST_API_URL) {
    this.getAll = function() {
      return $http.get(REST_API_URL + '/ledgers');
    };

    this.getOneById = function(id) {
      return $http.get(REST_API_URL + '/ledgers/' + id);
    };

    this.createTransaction = function(toAddress, amount) {
      return $http.post(REST_API_URL + '/transactions',
        {
          to: toAddress,
          amount: amount
        }
      );
    };
  }

  Ledgers.$inject = ['$http', 'REST_API_URL'];
})();
