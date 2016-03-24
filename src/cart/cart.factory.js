'use strict';

angular.module('cart').factory('CartFactory', function () {
  var CartFactory = {};
  CartFactory.totalCost = 0;
  CartFactory.items = [
    {
      name: 'Apples',
      imageName: 'apples.jpg',
      cost: 0.50
    },
    {
      name: 'Bananas',
      imageName: 'bananas.jpg',
      cost: 0.25
    },
    {
      name: 'Carrots',
      imageName: 'carrots.jpg',
      cost: 1.25
    }
  ];

  angular.forEach(CartFactory.items, function (item) {
    item.numPurchased = 0;
  });

  CartFactory.purchase = function (item) {
    item.numPurchased++;
    CartFactory.totalCost += item.cost;
    if (CartFactory.totalCost > 10) {
      CartFactory.isFreeShipping = true;
    }
  };

  return CartFactory;
});
