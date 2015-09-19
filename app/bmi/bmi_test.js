'use strict';

describe('myApp.bmi module', function() {

  beforeEach(module('myApp.bmi'));

  describe('bmi controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var bmiCtrl = $controller('BmiCtrl');
      expect(bmiCtrl).toBeDefined();
    }));

  });
});