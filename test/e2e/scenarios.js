'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


  it('should automatically redirect to / when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/");
  });

   it('should filter the phone list as user types into the search box', function() {
      expect(repeater('.phones li').count()).toBe(3);
      
      input('query').enter('nexus');
      expect(repeater('.phones li').count()).toBe(1);
      
      input('query').enter('motorola');
      expect(repeater('.phones li').count()).toBe(2);
   });

   
   it('should display the current filter value within an element with id "status"', function() {

      expect(element('#status').text()).toMatch(/Current filter: \s*$/);
      input('query').enter('nexus');
      expect(element('#status').text()).toMatch(/Current filter: nexus\s*$/);
      
      //>>>>>>>>>>>>>
      // pause();
      
      //alternative version of the last assertion that tests just the value of the binding
      using('#status').expect(binding('query')).toBe('nexus');
   });
   

  describe('view1', function() {

    beforeEach(function() {
      browser().navigateTo('#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/partial for view 1/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser().navigateTo('#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/partial for view 2/);
    });

  });

});
