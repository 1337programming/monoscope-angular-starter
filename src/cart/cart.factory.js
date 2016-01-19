'use strict';

angular.module('cart').factory('CartFactory', function() {
    var CartFactory = {};
    CartFactory.totalCost = 0;
    CartFactory.items = [
        {
            name: 'Apples',
            image: require('../images/apples.jpg'),
            cost: 0.50
		},
        {
            name: 'Bananas',
            image: require('../images/bananas.jpg'),
            cost: 0.25
		},
        {
            name: 'Carrots',
            image: require('../images/carrots.jpg'),
            cost: 1.25
		}
	];

	angular.forEach(CartFactory.items, function(item) {
		item.numPurchased = 0;
	});

	CartFactory.purchase = function(item) {
		item.numPurchased++;
		CartFactory.totalCost += item.cost;
		if (CartFactory.totalCost > 10) {
			CartFactory.isFreeShipping = true;
		}
	};

    return CartFactory;
});
