describe('CartController', function() {

  var scope, $rootScope, $controller, self;

  beforeEach(angular.mock.module('cartTwo'));

  beforeEach(angular.mock.module(function($provide) {
    var CartServiceMock = {
      helloWorld: function () {
        return 'hello world';
      }
    };

    $provide.value('CartServiceTwo', CartServiceMock);
  }));

  beforeEach(inject(function(_$rootScope_, _$controller_, _CartServiceTwo_){
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();

    self = $controller('CartControllerTwo', {
      $scope: scope,
      CartServiceTwo: _CartServiceTwo_
    });
  }));


  it('should have initial todos', function() {
    console.log(scope);
    expect(scope.todos.length).to.equal(3);
  });

  it('message should say hello world', function () {
    expect(scope.message).to.equal('hello world');
  })


});